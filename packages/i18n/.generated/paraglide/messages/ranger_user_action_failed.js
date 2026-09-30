/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Action_FailedInputs */

const en_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The change wasn’t saved`)
};

const es_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se guardó el cambio`)
};

const de_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Änderung wurde nicht gespeichert`)
};

const fr_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La modification n’a pas été enregistrée`)
};

const it_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La modifica non è stata salvata`)
};

const nl_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De wijziging is niet opgeslagen`)
};

const pl_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiana nie została zapisana`)
};

const pt_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A alteração não foi salva`)
};

const ru_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменение не сохранено`)
};

const sv_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringen sparades inte`)
};

const tr_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik kaydedilmedi`)
};

const zh_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更改未保存`)
};

const ja_ranger_user_action_failed = /** @type {(inputs: Ranger_User_Action_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更は保存されませんでした`)
};

/**
* | output |
* | --- |
* | "The change wasn’t saved" |
*
* @param {Ranger_User_Action_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_action_failed = /** @type {((inputs?: Ranger_User_Action_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Action_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_action_failed(inputs)
	if (locale === "de") return de_ranger_user_action_failed(inputs)
	if (locale === "fr") return fr_ranger_user_action_failed(inputs)
	if (locale === "it") return it_ranger_user_action_failed(inputs)
	if (locale === "nl") return nl_ranger_user_action_failed(inputs)
	if (locale === "pl") return pl_ranger_user_action_failed(inputs)
	if (locale === "pt") return pt_ranger_user_action_failed(inputs)
	if (locale === "ru") return ru_ranger_user_action_failed(inputs)
	if (locale === "sv") return sv_ranger_user_action_failed(inputs)
	if (locale === "tr") return tr_ranger_user_action_failed(inputs)
	if (locale === "zh") return zh_ranger_user_action_failed(inputs)
	if (locale === "ja") return ja_ranger_user_action_failed(inputs)
	return en_ranger_user_action_failed(inputs)
});
