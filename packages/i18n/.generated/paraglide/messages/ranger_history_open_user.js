/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_History_Open_UserInputs */

const en_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open user card`)
};

const es_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir ficha de usuario`)
};

const de_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benutzerkarte öffnen`)
};

const fr_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir la fiche utilisateur`)
};

const it_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri la scheda utente`)
};

const nl_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikerskaart openen`)
};

const pl_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz kartę użytkownika`)
};

const pt_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir ficha do usuário`)
};

const ru_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть карточку пользователя`)
};

const sv_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna användarkortet`)
};

const tr_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı kartını aç`)
};

const zh_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开用户卡片`)
};

const ja_ranger_history_open_user = /** @type {(inputs: Ranger_History_Open_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザーカードを開く`)
};

/**
* | output |
* | --- |
* | "Open user card" |
*
* @param {Ranger_History_Open_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_open_user = /** @type {((inputs?: Ranger_History_Open_UserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_Open_UserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_open_user(inputs)
	if (locale === "de") return de_ranger_history_open_user(inputs)
	if (locale === "fr") return fr_ranger_history_open_user(inputs)
	if (locale === "it") return it_ranger_history_open_user(inputs)
	if (locale === "nl") return nl_ranger_history_open_user(inputs)
	if (locale === "pl") return pl_ranger_history_open_user(inputs)
	if (locale === "pt") return pt_ranger_history_open_user(inputs)
	if (locale === "ru") return ru_ranger_history_open_user(inputs)
	if (locale === "sv") return sv_ranger_history_open_user(inputs)
	if (locale === "tr") return tr_ranger_history_open_user(inputs)
	if (locale === "zh") return zh_ranger_history_open_user(inputs)
	if (locale === "ja") return ja_ranger_history_open_user(inputs)
	return en_ranger_history_open_user(inputs)
});
