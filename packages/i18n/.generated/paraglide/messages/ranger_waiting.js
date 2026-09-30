/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Ranger_WaitingInputs */

const en_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`waiting ${i?.time}`)
};

const es_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`esperando ${i?.time}`)
};

const de_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wartezeit ${i?.time}`)
};

const fr_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`attente ${i?.time}`)
};

const it_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`in attesa da ${i?.time}`)
};

const nl_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`wacht ${i?.time}`)
};

const pl_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`czeka ${i?.time}`)
};

const pt_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`aguardando há ${i?.time}`)
};

const ru_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ждёт ${i?.time}`)
};

const sv_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`väntat ${i?.time}`)
};

const tr_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} bekliyor`)
};

const zh_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已等待 ${i?.time}`)
};

const ja_ranger_waiting = /** @type {(inputs: Ranger_WaitingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} 待機`)
};

/**
* | output |
* | --- |
* | "waiting {time}" |
*
* @param {Ranger_WaitingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_waiting = /** @type {((inputs: Ranger_WaitingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_WaitingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_waiting(inputs)
	if (locale === "de") return de_ranger_waiting(inputs)
	if (locale === "fr") return fr_ranger_waiting(inputs)
	if (locale === "it") return it_ranger_waiting(inputs)
	if (locale === "nl") return nl_ranger_waiting(inputs)
	if (locale === "pl") return pl_ranger_waiting(inputs)
	if (locale === "pt") return pt_ranger_waiting(inputs)
	if (locale === "ru") return ru_ranger_waiting(inputs)
	if (locale === "sv") return sv_ranger_waiting(inputs)
	if (locale === "tr") return tr_ranger_waiting(inputs)
	if (locale === "zh") return zh_ranger_waiting(inputs)
	if (locale === "ja") return ja_ranger_waiting(inputs)
	return en_ranger_waiting(inputs)
});
