const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('./Members');

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({ msg: 'No member with the id of ${req.params.id}' });
    }
});

// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    //members.save(newMember)
    members.push(newMember);
    //res.json(members);
    res.redirect('/');
});

// Update Member
// Make a put request to API Members ID
router.put('/:id', (req, res) => {

    // Check if its found
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        // loop through members to check if ID is equal to the ID that is pass in
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                // Update name depending on if the name was sent with the request, if it was, we will set it to the new name, if it wasn't, we will keep the old one
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member update', member });
            }
        });
    }
    else {
        res.status(400).json({ msg: 'No member with the id of ${req.params.id}' });
    }
});

// Delete Member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({ msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id)) });
    }
    else {
        res.status(400).json({ msg: 'No member with the id of ${req.params.id}' });
    }
});

module.exports = router;