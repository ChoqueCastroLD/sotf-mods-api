/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Escalate_FailedInputs */

const en_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t change the escalation`)
};

const es_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar el escalado`)
};

const de_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalation konnte nicht geändert werden`)
};

const fr_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de modifier l’escalade`)
};

const it_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile modificare l’inoltro`)
};

const nl_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalatie kon niet worden gewijzigd`)
};

const pl_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić eskalacji`)
};

const pt_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível alterar o escalonamento`)
};

const ru_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось изменить передачу админам`)
};

const sv_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ändra eskaleringen`)
};

const tr_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükseltme değiştirilemedi`)
};

const zh_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更改上报状态`)
};

const ja_ranger_escalate_failed = /** @type {(inputs: Ranger_Escalate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エスカレーションを変更できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t change the escalation" |
*
* @param {Ranger_Escalate_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate_failed = /** @type {((inputs?: Ranger_Escalate_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate_failed(inputs)
	if (locale === "de") return de_ranger_escalate_failed(inputs)
	if (locale === "fr") return fr_ranger_escalate_failed(inputs)
	if (locale === "it") return it_ranger_escalate_failed(inputs)
	if (locale === "nl") return nl_ranger_escalate_failed(inputs)
	if (locale === "pl") return pl_ranger_escalate_failed(inputs)
	if (locale === "pt") return pt_ranger_escalate_failed(inputs)
	if (locale === "ru") return ru_ranger_escalate_failed(inputs)
	if (locale === "sv") return sv_ranger_escalate_failed(inputs)
	if (locale === "tr") return tr_ranger_escalate_failed(inputs)
	if (locale === "zh") return zh_ranger_escalate_failed(inputs)
	if (locale === "ja") return ja_ranger_escalate_failed(inputs)
	return en_ranger_escalate_failed(inputs)
});
