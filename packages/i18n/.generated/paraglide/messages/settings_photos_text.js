/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Photos_TextInputs */

const en_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your avatar and the banner at the top of your profile. Changes are saved as soon as the upload finishes.`)
};

const es_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu avatar y el banner de la parte superior de tu perfil. Los cambios se guardan en cuanto termina la subida.`)
};

const de_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Avatar und das Banner oben auf deinem Profil. Änderungen werden gespeichert, sobald der Upload fertig ist.`)
};

const fr_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre avatar et la bannière en haut de votre profil. Les modifications sont enregistrées dès la fin de l’envoi.`)
};

const it_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo avatar e il banner in cima al profilo. Le modifiche vengono salvate appena termina il caricamento.`)
};

const nl_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je avatar en de banner boven aan je profiel. Wijzigingen worden opgeslagen zodra de upload klaar is.`)
};

const pl_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój awatar i baner na górze profilu. Zmiany zapisują się, gdy tylko skończy się przesyłanie.`)
};

const pt_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu avatar e o banner no topo do perfil. As alterações são salvas assim que o envio termina.`)
};

const ru_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш аватар и баннер в верхней части профиля. Изменения сохраняются сразу после загрузки.`)
};

const sv_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din avatar och bannern högst upp på profilen. Ändringar sparas så fort uppladdningen är klar.`)
};

const tr_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatarın ve profilinin üstündeki afiş. Değişiklikler yükleme biter bitmez kaydedilir.`)
};

const zh_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的头像和个人资料顶部的横幅。上传完成后会立即保存。`)
};

const ja_settings_photos_text = /** @type {(inputs: Settings_Photos_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アバターと、プロフィール上部のバナー。アップロードが終わるとすぐに保存されます。`)
};

/**
* | output |
* | --- |
* | "Your avatar and the banner at the top of your profile. Changes are saved as soon as the upload finishes." |
*
* @param {Settings_Photos_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_photos_text = /** @type {((inputs?: Settings_Photos_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Photos_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_photos_text(inputs)
	if (locale === "de") return de_settings_photos_text(inputs)
	if (locale === "fr") return fr_settings_photos_text(inputs)
	if (locale === "it") return it_settings_photos_text(inputs)
	if (locale === "nl") return nl_settings_photos_text(inputs)
	if (locale === "pl") return pl_settings_photos_text(inputs)
	if (locale === "pt") return pt_settings_photos_text(inputs)
	if (locale === "ru") return ru_settings_photos_text(inputs)
	if (locale === "sv") return sv_settings_photos_text(inputs)
	if (locale === "tr") return tr_settings_photos_text(inputs)
	if (locale === "zh") return zh_settings_photos_text(inputs)
	if (locale === "ja") return ja_settings_photos_text(inputs)
	return en_settings_photos_text(inputs)
});
