/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Empty_TitleInputs */

const en_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No downloads yet`)
};

const es_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay descargas`)
};

const de_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Downloads`)
};

const fr_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun téléchargement pour l’instant`)
};

const it_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun download`)
};

const nl_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen downloads`)
};

const pl_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze nic nie pobrano`)
};

const pt_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum download ainda`)
};

const ru_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузок пока нет`)
};

const sv_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga nedladdningar än`)
};

const tr_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz indirme yok`)
};

const zh_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有下载`)
};

const ja_me_downloads_empty_title = /** @type {(inputs: Me_Downloads_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだダウンロードはありません`)
};

/**
* | output |
* | --- |
* | "No downloads yet" |
*
* @param {Me_Downloads_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_empty_title = /** @type {((inputs?: Me_Downloads_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_empty_title(inputs)
	if (locale === "de") return de_me_downloads_empty_title(inputs)
	if (locale === "fr") return fr_me_downloads_empty_title(inputs)
	if (locale === "it") return it_me_downloads_empty_title(inputs)
	if (locale === "nl") return nl_me_downloads_empty_title(inputs)
	if (locale === "pl") return pl_me_downloads_empty_title(inputs)
	if (locale === "pt") return pt_me_downloads_empty_title(inputs)
	if (locale === "ru") return ru_me_downloads_empty_title(inputs)
	if (locale === "sv") return sv_me_downloads_empty_title(inputs)
	if (locale === "tr") return tr_me_downloads_empty_title(inputs)
	if (locale === "zh") return zh_me_downloads_empty_title(inputs)
	if (locale === "ja") return ja_me_downloads_empty_title(inputs)
	return en_me_downloads_empty_title(inputs)
});
