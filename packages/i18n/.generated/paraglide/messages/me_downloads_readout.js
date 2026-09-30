/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_ReadoutInputs */

const en_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supply log`)
};

const es_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de suministros`)
};

const de_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorratsbuch`)
};

const fr_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal des provisions`)
};

const it_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro scorte`)
};

const nl_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorraadlogboek`)
};

const pl_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dziennik zapasów`)
};

const pt_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de suprimentos`)
};

const ru_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Журнал припасов`)
};

const sv_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förrådslogg`)
};

const tr_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erzak kaydı`)
};

const zh_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补给日志`)
};

const ja_me_downloads_readout = /** @type {(inputs: Me_Downloads_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`補給ログ`)
};

/**
* | output |
* | --- |
* | "Supply log" |
*
* @param {Me_Downloads_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_readout = /** @type {((inputs?: Me_Downloads_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_readout(inputs)
	if (locale === "de") return de_me_downloads_readout(inputs)
	if (locale === "fr") return fr_me_downloads_readout(inputs)
	if (locale === "it") return it_me_downloads_readout(inputs)
	if (locale === "nl") return nl_me_downloads_readout(inputs)
	if (locale === "pl") return pl_me_downloads_readout(inputs)
	if (locale === "pt") return pt_me_downloads_readout(inputs)
	if (locale === "ru") return ru_me_downloads_readout(inputs)
	if (locale === "sv") return sv_me_downloads_readout(inputs)
	if (locale === "tr") return tr_me_downloads_readout(inputs)
	if (locale === "zh") return zh_me_downloads_readout(inputs)
	if (locale === "ja") return ja_me_downloads_readout(inputs)
	return en_me_downloads_readout(inputs)
});
