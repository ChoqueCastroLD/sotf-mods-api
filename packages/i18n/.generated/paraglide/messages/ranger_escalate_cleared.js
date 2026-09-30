/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Escalate_ClearedInputs */

const en_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalation cleared.`)
};

const es_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalado retirado.`)
};

const de_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalation aufgehoben.`)
};

const fr_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalade annulée.`)
};

const it_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inoltro annullato.`)
};

const nl_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalatie opgeheven.`)
};

const pl_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskalacja cofnięta.`)
};

const pt_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalonamento removido.`)
};

const ru_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Передача админам снята.`)
};

const sv_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eskaleringen togs bort.`)
};

const tr_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükseltme kaldırıldı.`)
};

const zh_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消上报。`)
};

const ja_ranger_escalate_cleared = /** @type {(inputs: Ranger_Escalate_ClearedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エスカレーションを解除しました。`)
};

/**
* | output |
* | --- |
* | "Escalation cleared." |
*
* @param {Ranger_Escalate_ClearedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate_cleared = /** @type {((inputs?: Ranger_Escalate_ClearedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_ClearedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate_cleared(inputs)
	if (locale === "de") return de_ranger_escalate_cleared(inputs)
	if (locale === "fr") return fr_ranger_escalate_cleared(inputs)
	if (locale === "it") return it_ranger_escalate_cleared(inputs)
	if (locale === "nl") return nl_ranger_escalate_cleared(inputs)
	if (locale === "pl") return pl_ranger_escalate_cleared(inputs)
	if (locale === "pt") return pt_ranger_escalate_cleared(inputs)
	if (locale === "ru") return ru_ranger_escalate_cleared(inputs)
	if (locale === "sv") return sv_ranger_escalate_cleared(inputs)
	if (locale === "tr") return tr_ranger_escalate_cleared(inputs)
	if (locale === "zh") return zh_ranger_escalate_cleared(inputs)
	if (locale === "ja") return ja_ranger_escalate_cleared(inputs)
	return en_ranger_escalate_cleared(inputs)
});
