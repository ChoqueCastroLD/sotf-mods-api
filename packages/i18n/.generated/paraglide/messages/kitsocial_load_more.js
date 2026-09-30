/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Load_MoreInputs */

const en_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more comments`)
};

const es_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargar más comentarios`)
};

const de_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Kommentare laden`)
};

const fr_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Charger plus de commentaires`)
};

const it_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica altri commenti`)
};

const nl_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer reacties laden`)
};

const pl_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytaj więcej komentarzy`)
};

const pt_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregar mais comentários`)
};

const ru_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить ещё комментарии`)
};

const sv_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs in fler kommentarer`)
};

const tr_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla yorum yükle`)
};

const zh_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多评论`)
};

const ja_kitsocial_load_more = /** @type {(inputs: Kitsocial_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`さらにコメントを読み込む`)
};

/**
* | output |
* | --- |
* | "Load more comments" |
*
* @param {Kitsocial_Load_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_load_more = /** @type {((inputs?: Kitsocial_Load_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Load_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_load_more(inputs)
	if (locale === "de") return de_kitsocial_load_more(inputs)
	if (locale === "fr") return fr_kitsocial_load_more(inputs)
	if (locale === "it") return it_kitsocial_load_more(inputs)
	if (locale === "nl") return nl_kitsocial_load_more(inputs)
	if (locale === "pl") return pl_kitsocial_load_more(inputs)
	if (locale === "pt") return pt_kitsocial_load_more(inputs)
	if (locale === "ru") return ru_kitsocial_load_more(inputs)
	if (locale === "sv") return sv_kitsocial_load_more(inputs)
	if (locale === "tr") return tr_kitsocial_load_more(inputs)
	if (locale === "zh") return zh_kitsocial_load_more(inputs)
	if (locale === "ja") return ja_kitsocial_load_more(inputs)
	return en_kitsocial_load_more(inputs)
});
