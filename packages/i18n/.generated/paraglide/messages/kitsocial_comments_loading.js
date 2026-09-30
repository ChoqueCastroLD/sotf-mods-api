/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Comments_LoadingInputs */

const en_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading comments…`)
};

const es_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando comentarios…`)
};

const de_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare werden geladen …`)
};

const fr_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement des commentaires…`)
};

const it_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento dei commenti…`)
};

const nl_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties laden…`)
};

const pl_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie komentarzy…`)
};

const pt_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando comentários…`)
};

const ru_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка комментариев…`)
};

const sv_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läser in kommentarer …`)
};

const tr_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar yükleniyor…`)
};

const zh_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载评论…`)
};

const ja_kitsocial_comments_loading = /** @type {(inputs: Kitsocial_Comments_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを読み込み中…`)
};

/**
* | output |
* | --- |
* | "Loading comments…" |
*
* @param {Kitsocial_Comments_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_comments_loading = /** @type {((inputs?: Kitsocial_Comments_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Comments_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_comments_loading(inputs)
	if (locale === "de") return de_kitsocial_comments_loading(inputs)
	if (locale === "fr") return fr_kitsocial_comments_loading(inputs)
	if (locale === "it") return it_kitsocial_comments_loading(inputs)
	if (locale === "nl") return nl_kitsocial_comments_loading(inputs)
	if (locale === "pl") return pl_kitsocial_comments_loading(inputs)
	if (locale === "pt") return pt_kitsocial_comments_loading(inputs)
	if (locale === "ru") return ru_kitsocial_comments_loading(inputs)
	if (locale === "sv") return sv_kitsocial_comments_loading(inputs)
	if (locale === "tr") return tr_kitsocial_comments_loading(inputs)
	if (locale === "zh") return zh_kitsocial_comments_loading(inputs)
	if (locale === "ja") return ja_kitsocial_comments_loading(inputs)
	return en_kitsocial_comments_loading(inputs)
});
