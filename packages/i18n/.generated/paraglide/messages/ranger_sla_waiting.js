/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sla_WaitingInputs */

const en_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting in this queue`)
};

const es_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En espera en esta cola`)
};

const de_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartend in dieser Warteschlange`)
};

const fr_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente dans cette file`)
};

const it_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa in questa coda`)
};

const nl_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtend in deze wachtrij`)
};

const pl_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czeka w tej kolejce`)
};

const pt_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando nesta fila`)
};

const ru_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ждут в этой очереди`)
};

const sv_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar i den här kön`)
};

const tr_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kuyrukta bekleyen`)
};

const zh_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此队列等待中`)
};

const ja_ranger_sla_waiting = /** @type {(inputs: Ranger_Sla_WaitingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキューで待機中`)
};

/**
* | output |
* | --- |
* | "Waiting in this queue" |
*
* @param {Ranger_Sla_WaitingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sla_waiting = /** @type {((inputs?: Ranger_Sla_WaitingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_WaitingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sla_waiting(inputs)
	if (locale === "de") return de_ranger_sla_waiting(inputs)
	if (locale === "fr") return fr_ranger_sla_waiting(inputs)
	if (locale === "it") return it_ranger_sla_waiting(inputs)
	if (locale === "nl") return nl_ranger_sla_waiting(inputs)
	if (locale === "pl") return pl_ranger_sla_waiting(inputs)
	if (locale === "pt") return pt_ranger_sla_waiting(inputs)
	if (locale === "ru") return ru_ranger_sla_waiting(inputs)
	if (locale === "sv") return sv_ranger_sla_waiting(inputs)
	if (locale === "tr") return tr_ranger_sla_waiting(inputs)
	if (locale === "zh") return zh_ranger_sla_waiting(inputs)
	if (locale === "ja") return ja_ranger_sla_waiting(inputs)
	return en_ranger_sla_waiting(inputs)
});
