/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Comments_Load_FailedInputs */

const en_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments could not be loaded.`)
};

const es_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar los comentarios.`)
};

const de_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare konnten nicht geladen werden.`)
};

const fr_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les commentaires.`)
};

const it_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare i commenti.`)
};

const nl_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties konden niet worden geladen.`)
};

const pl_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać komentarzy.`)
};

const pt_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os comentários.`)
};

const ru_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить комментарии.`)
};

const sv_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarerna kunde inte läsas in.`)
};

const tr_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar yüklenemedi.`)
};

const zh_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载评论。`)
};

const ja_kitsocial_comments_load_failed = /** @type {(inputs: Kitsocial_Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "Comments could not be loaded." |
*
* @param {Kitsocial_Comments_Load_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_comments_load_failed = /** @type {((inputs?: Kitsocial_Comments_Load_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Comments_Load_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_comments_load_failed(inputs)
	if (locale === "de") return de_kitsocial_comments_load_failed(inputs)
	if (locale === "fr") return fr_kitsocial_comments_load_failed(inputs)
	if (locale === "it") return it_kitsocial_comments_load_failed(inputs)
	if (locale === "nl") return nl_kitsocial_comments_load_failed(inputs)
	if (locale === "pl") return pl_kitsocial_comments_load_failed(inputs)
	if (locale === "pt") return pt_kitsocial_comments_load_failed(inputs)
	if (locale === "ru") return ru_kitsocial_comments_load_failed(inputs)
	if (locale === "sv") return sv_kitsocial_comments_load_failed(inputs)
	if (locale === "tr") return tr_kitsocial_comments_load_failed(inputs)
	if (locale === "zh") return zh_kitsocial_comments_load_failed(inputs)
	if (locale === "ja") return ja_kitsocial_comments_load_failed(inputs)
	return en_kitsocial_comments_load_failed(inputs)
});
