/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Mp_NoInputs */

const en_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No multiplayer`)
};

const es_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin multijugador`)
};

const de_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ohne Mehrspieler`)
};

const fr_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sans multijoueur`)
};

const it_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senza multigiocatore`)
};

const nl_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zonder multiplayer`)
};

const pl_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez trybu wieloosobowego`)
};

const pt_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem multijogador`)
};

const ru_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без мультиплеера`)
};

const sv_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utan flerspelare`)
};

const tr_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyuncusuz`)
};

const zh_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不支持多人`)
};

const ja_cmdk_mp_no = /** @type {(inputs: Cmdk_Mp_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ非対応`)
};

/**
* | output |
* | --- |
* | "No multiplayer" |
*
* @param {Cmdk_Mp_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_mp_no = /** @type {((inputs?: Cmdk_Mp_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Mp_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_mp_no(inputs)
	if (locale === "de") return de_cmdk_mp_no(inputs)
	if (locale === "fr") return fr_cmdk_mp_no(inputs)
	if (locale === "it") return it_cmdk_mp_no(inputs)
	if (locale === "nl") return nl_cmdk_mp_no(inputs)
	if (locale === "pl") return pl_cmdk_mp_no(inputs)
	if (locale === "pt") return pt_cmdk_mp_no(inputs)
	if (locale === "ru") return ru_cmdk_mp_no(inputs)
	if (locale === "sv") return sv_cmdk_mp_no(inputs)
	if (locale === "tr") return tr_cmdk_mp_no(inputs)
	if (locale === "zh") return zh_cmdk_mp_no(inputs)
	if (locale === "ja") return ja_cmdk_mp_no(inputs)
	return en_cmdk_mp_no(inputs)
});
