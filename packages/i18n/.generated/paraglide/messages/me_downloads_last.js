/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, date: NonNullable<unknown> }} Me_Downloads_LastInputs */

const en_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You downloaded ${i?.version} on ${i?.date}`)
};

const es_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descargaste la ${i?.version} el ${i?.date}`)
};

const de_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du hast ${i?.version} am ${i?.date} heruntergeladen`)
};

const fr_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous avez téléchargé la ${i?.version} le ${i?.date}`)
};

const it_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hai scaricato la ${i?.version} il ${i?.date}`)
};

const nl_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je hebt ${i?.version} gedownload op ${i?.date}`)
};

const pl_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobrano ${i?.version} dnia ${i?.date}`)
};

const pt_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você baixou a ${i?.version} em ${i?.date}`)
};

const ru_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы скачали ${i?.version} ${i?.date}`)
};

const sv_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du laddade ned ${i?.version} den ${i?.date}`)
};

const tr_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} sürümünü ${i?.date} tarihinde indirdin`)
};

const zh_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你于 ${i?.date} 下载了 ${i?.version}`)
};

const ja_me_downloads_last = /** @type {(inputs: Me_Downloads_LastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に ${i?.version} をダウンロード`)
};

/**
* | output |
* | --- |
* | "You downloaded {version} on {date}" |
*
* @param {Me_Downloads_LastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_last = /** @type {((inputs: Me_Downloads_LastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_LastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_last(inputs)
	if (locale === "de") return de_me_downloads_last(inputs)
	if (locale === "fr") return fr_me_downloads_last(inputs)
	if (locale === "it") return it_me_downloads_last(inputs)
	if (locale === "nl") return nl_me_downloads_last(inputs)
	if (locale === "pl") return pl_me_downloads_last(inputs)
	if (locale === "pt") return pt_me_downloads_last(inputs)
	if (locale === "ru") return ru_me_downloads_last(inputs)
	if (locale === "sv") return sv_me_downloads_last(inputs)
	if (locale === "tr") return tr_me_downloads_last(inputs)
	if (locale === "zh") return zh_me_downloads_last(inputs)
	if (locale === "ja") return ja_me_downloads_last(inputs)
	return en_me_downloads_last(inputs)
});
