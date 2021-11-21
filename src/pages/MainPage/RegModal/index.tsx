import { Modal, View } from 'react-native';
import React, { FC } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

const RegModal: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <Modal visible={isOpen}>
            <View style={{ height: '100%', display: 'flex', flexDirection: 'column',  }}>
                <MaterialCommunityIcons
                    name="close"
                    color="white"
                    size={26}
                    onPress={onClose}
                    style={styles.closeIcon}
                />
                <iframe style={{ overflowY: 'hidden' }} width="100%" height="100%" src="https://docs.google.com/forms/d/e/1FAIpQLScCUq5B9ydGtRc-A6jIQhicE5Gif396Rpg1uJ4aox5KXkpAWQ/viewform"> </iframe>
            </View>
        </Modal>
    );
};

export { RegModal };
