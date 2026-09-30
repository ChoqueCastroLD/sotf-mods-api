/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_News_EmptyInputs */

const en_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No news yet. All quiet in the woods.`)
};

const es_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay novedades. Todo tranquilo en el bosque.`)
};

const de_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Neuigkeiten. Alles ruhig im Wald.`)
};

const fr_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore d’actualités. Tout est calme dans la forêt.`)
};

const it_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna novità. Tutto tranquillo nel bosco.`)
};

const nl_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen nieuws. Alles rustig in het bos.`)
};

const pl_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak aktualności. W lesie cisza.`)
};

const pt_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma novidade ainda. Tudo tranquilo na floresta.`)
};

const ru_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новостей пока нет. В лесу тихо.`)
};

const sv_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga nyheter än. Allt är lugnt i skogen.`)
};

const tr_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz haber yok. Ormanda her şey sakin.`)
};

const zh_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有新闻。林中一片宁静。`)
};

const ja_content_news_empty = /** @type {(inputs: Content_News_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだニュースはありません。森は静かです。`)
};

/**
* | output |
* | --- |
* | "No news yet. All quiet in the woods." |
*
* @param {Content_News_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_news_empty = /** @type {((inputs?: Content_News_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_News_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_news_empty(inputs)
	if (locale === "de") return de_content_news_empty(inputs)
	if (locale === "fr") return fr_content_news_empty(inputs)
	if (locale === "it") return it_content_news_empty(inputs)
	if (locale === "nl") return nl_content_news_empty(inputs)
	if (locale === "pl") return pl_content_news_empty(inputs)
	if (locale === "pt") return pt_content_news_empty(inputs)
	if (locale === "ru") return ru_content_news_empty(inputs)
	if (locale === "sv") return sv_content_news_empty(inputs)
	if (locale === "tr") return tr_content_news_empty(inputs)
	if (locale === "zh") return zh_content_news_empty(inputs)
	if (locale === "ja") return ja_content_news_empty(inputs)
	return en_content_news_empty(inputs)
});
