/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Translator_FailedInputs */

const en_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t change the translator badge`)
};

const es_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar la insignia de traductor`)
};

const de_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzer-Abzeichen konnte nicht geändert werden`)
};

const fr_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de modifier le badge de traducteur`)
};

const it_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile modificare il distintivo di traduttore`)
};

const nl_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertalersbadge kon niet worden gewijzigd`)
};

const pl_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić odznaki tłumacza`)
};

const pt_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível alterar a insígnia de tradutor`)
};

const ru_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось изменить значок переводчика`)
};

const sv_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ändra översättarmärket`)
};

const tr_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevirmen rozeti değiştirilemedi`)
};

const zh_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更改译者徽章`)
};

const ja_ranger_user_translator_failed = /** @type {(inputs: Ranger_User_Translator_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳者バッジを変更できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t change the translator badge" |
*
* @param {Ranger_User_Translator_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_translator_failed = /** @type {((inputs?: Ranger_User_Translator_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Translator_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_translator_failed(inputs)
	if (locale === "de") return de_ranger_user_translator_failed(inputs)
	if (locale === "fr") return fr_ranger_user_translator_failed(inputs)
	if (locale === "it") return it_ranger_user_translator_failed(inputs)
	if (locale === "nl") return nl_ranger_user_translator_failed(inputs)
	if (locale === "pl") return pl_ranger_user_translator_failed(inputs)
	if (locale === "pt") return pt_ranger_user_translator_failed(inputs)
	if (locale === "ru") return ru_ranger_user_translator_failed(inputs)
	if (locale === "sv") return sv_ranger_user_translator_failed(inputs)
	if (locale === "tr") return tr_ranger_user_translator_failed(inputs)
	if (locale === "zh") return zh_ranger_user_translator_failed(inputs)
	if (locale === "ja") return ja_ranger_user_translator_failed(inputs)
	return en_ranger_user_translator_failed(inputs)
});
