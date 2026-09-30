/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Decision_FailedInputs */

const en_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The decision wasn’t saved`)
};

const es_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se guardó la decisión`)
};

const de_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Entscheidung wurde nicht gespeichert`)
};

const fr_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La décision n’a pas été enregistrée`)
};

const it_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La decisione non è stata salvata`)
};

const nl_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beslissing is niet opgeslagen`)
};

const pl_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decyzja nie została zapisana`)
};

const pt_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A decisão não foi salva`)
};

const ru_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решение не сохранено`)
};

const sv_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beslutet sparades inte`)
};

const tr_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karar kaydedilmedi`)
};

const zh_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`决定未保存`)
};

const ja_ranger_decision_failed = /** @type {(inputs: Ranger_Decision_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`判断は保存されませんでした`)
};

/**
* | output |
* | --- |
* | "The decision wasn’t saved" |
*
* @param {Ranger_Decision_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decision_failed = /** @type {((inputs?: Ranger_Decision_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decision_failed(inputs)
	if (locale === "de") return de_ranger_decision_failed(inputs)
	if (locale === "fr") return fr_ranger_decision_failed(inputs)
	if (locale === "it") return it_ranger_decision_failed(inputs)
	if (locale === "nl") return nl_ranger_decision_failed(inputs)
	if (locale === "pl") return pl_ranger_decision_failed(inputs)
	if (locale === "pt") return pt_ranger_decision_failed(inputs)
	if (locale === "ru") return ru_ranger_decision_failed(inputs)
	if (locale === "sv") return sv_ranger_decision_failed(inputs)
	if (locale === "tr") return tr_ranger_decision_failed(inputs)
	if (locale === "zh") return zh_ranger_decision_failed(inputs)
	if (locale === "ja") return ja_ranger_decision_failed(inputs)
	return en_ranger_decision_failed(inputs)
});
