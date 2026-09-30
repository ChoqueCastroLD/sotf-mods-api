/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_RequestInputs */

const en_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request`)
};

const es_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Petición`)
};

const de_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch`)
};

const fr_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demande`)
};

const it_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiesta`)
};

const nl_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek`)
};

const pl_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośba`)
};

const pt_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedido`)
};

const ru_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запрос`)
};

const sv_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemål`)
};

const tr_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek`)
};

const zh_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求`)
};

const ja_ranger_target_request = /** @type {(inputs: Ranger_Target_RequestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエスト`)
};

/**
* | output |
* | --- |
* | "Request" |
*
* @param {Ranger_Target_RequestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_request = /** @type {((inputs?: Ranger_Target_RequestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_RequestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_request(inputs)
	if (locale === "de") return de_ranger_target_request(inputs)
	if (locale === "fr") return fr_ranger_target_request(inputs)
	if (locale === "it") return it_ranger_target_request(inputs)
	if (locale === "nl") return nl_ranger_target_request(inputs)
	if (locale === "pl") return pl_ranger_target_request(inputs)
	if (locale === "pt") return pt_ranger_target_request(inputs)
	if (locale === "ru") return ru_ranger_target_request(inputs)
	if (locale === "sv") return sv_ranger_target_request(inputs)
	if (locale === "tr") return tr_ranger_target_request(inputs)
	if (locale === "zh") return zh_ranger_target_request(inputs)
	if (locale === "ja") return ja_ranger_target_request(inputs)
	return en_ranger_target_request(inputs)
});
