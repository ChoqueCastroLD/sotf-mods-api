/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Verify_Done_TextInputs */

const en_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your address is confirmed. You’re all set to comment, review and upload.`)
};

const es_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu dirección está confirmada. Ya puedes comentar, reseñar y subir mods.`)
};

const de_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Adresse ist bestätigt. Du kannst jetzt kommentieren, rezensieren und hochladen.`)
};

const fr_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre adresse est confirmée. Vous pouvez commenter, donner votre avis et publier.`)
};

const it_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo indirizzo è confermato. Ora puoi commentare, recensire e caricare.`)
};

const nl_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je adres is bevestigd. Je kunt nu reageren, recenseren en uploaden.`)
};

const pl_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój adres jest potwierdzony. Możesz już komentować, recenzować i wgrywać mody.`)
};

const pt_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu endereço foi confirmado. Agora você pode comentar, avaliar e enviar mods.`)
};

const ru_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш адрес подтверждён. Теперь можно комментировать, писать отзывы и загружать моды.`)
};

const sv_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din adress är bekräftad. Nu kan du kommentera, recensera och ladda upp.`)
};

const tr_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresin doğrulandı. Artık yorum yapabilir, inceleme yazabilir ve yükleme yapabilirsin.`)
};

const zh_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的邮箱已确认，现在可以评论、写评测和上传模组了。`)
};

const ja_auth_verify_done_text = /** @type {(inputs: Auth_Verify_Done_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレスの確認が完了しました。コメント、レビュー、アップロードができます。`)
};

/**
* | output |
* | --- |
* | "Your address is confirmed. You’re all set to comment, review and upload." |
*
* @param {Auth_Verify_Done_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_verify_done_text = /** @type {((inputs?: Auth_Verify_Done_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_Done_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_verify_done_text(inputs)
	if (locale === "de") return de_auth_verify_done_text(inputs)
	if (locale === "fr") return fr_auth_verify_done_text(inputs)
	if (locale === "it") return it_auth_verify_done_text(inputs)
	if (locale === "nl") return nl_auth_verify_done_text(inputs)
	if (locale === "pl") return pl_auth_verify_done_text(inputs)
	if (locale === "pt") return pt_auth_verify_done_text(inputs)
	if (locale === "ru") return ru_auth_verify_done_text(inputs)
	if (locale === "sv") return sv_auth_verify_done_text(inputs)
	if (locale === "tr") return tr_auth_verify_done_text(inputs)
	if (locale === "zh") return zh_auth_verify_done_text(inputs)
	if (locale === "ja") return ja_auth_verify_done_text(inputs)
	return en_auth_verify_done_text(inputs)
});
