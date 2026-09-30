/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_DescriptionInputs */

const en_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The banner under the site header. Messages fall back to English in languages without a translation.`)
};

const es_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El banner bajo la cabecera del sitio. En los idiomas sin traducción se muestra el mensaje en inglés.`)
};

const de_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Banner unter dem Seitenkopf. In Sprachen ohne Übersetzung erscheint die englische Nachricht.`)
};

const fr_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La bannière sous l’en-tête du site. Dans les langues sans traduction, le message anglais s’affiche.`)
};

const it_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il banner sotto l’intestazione del sito. Nelle lingue senza traduzione compare il messaggio in inglese.`)
};

const nl_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De banner onder de kop van de site. In talen zonder vertaling verschijnt het Engelse bericht.`)
};

const pl_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baner pod nagłówkiem strony. W językach bez tłumaczenia pojawia się wiadomość po angielsku.`)
};

const pt_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O banner abaixo do cabeçalho do site. Nos idiomas sem tradução aparece a mensagem em inglês.`)
};

const ru_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Баннер под шапкой сайта. На языках без перевода показывается английский текст.`)
};

const sv_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bannern under sajtens sidhuvud. På språk utan översättning visas det engelska meddelandet.`)
};

const tr_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site başlığının altındaki afiş. Çevirisi olmayan dillerde İngilizce mesaj gösterilir.`)
};

const zh_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站页眉下方的横幅。没有翻译的语言会显示英文内容。`)
};

const ja_admin_ann_description = /** @type {(inputs: Admin_Ann_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトのヘッダー下に出るバナーです。翻訳のない言語では英語のメッセージが表示されます。`)
};

/**
* | output |
* | --- |
* | "The banner under the site header. Messages fall back to English in languages without a translation." |
*
* @param {Admin_Ann_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_description = /** @type {((inputs?: Admin_Ann_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_description(inputs)
	if (locale === "de") return de_admin_ann_description(inputs)
	if (locale === "fr") return fr_admin_ann_description(inputs)
	if (locale === "it") return it_admin_ann_description(inputs)
	if (locale === "nl") return nl_admin_ann_description(inputs)
	if (locale === "pl") return pl_admin_ann_description(inputs)
	if (locale === "pt") return pt_admin_ann_description(inputs)
	if (locale === "ru") return ru_admin_ann_description(inputs)
	if (locale === "sv") return sv_admin_ann_description(inputs)
	if (locale === "tr") return tr_admin_ann_description(inputs)
	if (locale === "zh") return zh_admin_ann_description(inputs)
	if (locale === "ja") return ja_admin_ann_description(inputs)
	return en_admin_ann_description(inputs)
});
