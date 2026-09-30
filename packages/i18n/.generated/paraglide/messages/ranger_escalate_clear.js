/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Escalate_ClearInputs */

const en_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear escalation`)
};

const es_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar escalado`)
};

const de_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalation aufheben`)
};

const fr_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler l’escalade`)
};

const it_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla inoltro`)
};

const nl_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalatie opheffen`)
};

const pl_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij eskalację`)
};

const pt_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover escalonamento`)
};

const ru_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять передачу админам`)
};

const sv_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort eskalering`)
};

const tr_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükseltmeyi kaldır`)
};

const zh_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消上报`)
};

const ja_ranger_escalate_clear = /** @type {(inputs: Ranger_Escalate_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エスカレーションを解除`)
};

/**
* | output |
* | --- |
* | "Clear escalation" |
*
* @param {Ranger_Escalate_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate_clear = /** @type {((inputs?: Ranger_Escalate_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate_clear(inputs)
	if (locale === "de") return de_ranger_escalate_clear(inputs)
	if (locale === "fr") return fr_ranger_escalate_clear(inputs)
	if (locale === "it") return it_ranger_escalate_clear(inputs)
	if (locale === "nl") return nl_ranger_escalate_clear(inputs)
	if (locale === "pl") return pl_ranger_escalate_clear(inputs)
	if (locale === "pt") return pt_ranger_escalate_clear(inputs)
	if (locale === "ru") return ru_ranger_escalate_clear(inputs)
	if (locale === "sv") return sv_ranger_escalate_clear(inputs)
	if (locale === "tr") return tr_ranger_escalate_clear(inputs)
	if (locale === "zh") return zh_ranger_escalate_clear(inputs)
	if (locale === "ja") return ja_ranger_escalate_clear(inputs)
	return en_ranger_escalate_clear(inputs)
});
