/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_News_DescriptionInputs */

const en_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcements from the SOTF Mods team: new features, changes to the site and the API, and what is coming next.`)
};

const es_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncios del equipo de SOTF Mods: funciones nuevas, cambios en el sitio y en la API, y lo que viene.`)
};

const de_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigungen des SOTF-Mods-Teams: neue Funktionen, Änderungen an der Seite und der API und was als Nächstes kommt.`)
};

const fr_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonces de l’équipe SOTF Mods : nouvelles fonctionnalités, changements du site et de l’API, et ce qui arrive ensuite.`)
};

const it_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annunci del team di SOTF Mods: nuove funzioni, modifiche al sito e all’API e cosa arriverà.`)
};

const nl_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondigingen van het SOTF Mods-team: nieuwe functies, wijzigingen aan de site en de API, en wat er nog komt.`)
};

const pl_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenia zespołu SOTF Mods: nowe funkcje, zmiany w serwisie i API oraz plany na przyszłość.`)
};

const pt_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anúncios da equipe do SOTF Mods: novos recursos, mudanças no site e na API e o que vem por aí.`)
};

const ru_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявления команды SOTF Mods: новые функции, изменения сайта и API и планы на будущее.`)
};

const sv_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelanden från SOTF Mods-teamet: nya funktioner, ändringar på webbplatsen och i API:t och vad som är på gång.`)
};

const tr_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods ekibinden duyurular: yeni özellikler, sitede ve API’de değişiklikler ve sırada ne olduğu.`)
};

const zh_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 团队的公告：新功能、网站与 API 的变化，以及接下来的计划。`)
};

const ja_content_news_description = /** @type {(inputs: Content_News_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods チームからのお知らせ：新機能、サイトと API の変更、今後の予定。`)
};

/**
* | output |
* | --- |
* | "Announcements from the SOTF Mods team: new features, changes to the site and the API, and what is coming next." |
*
* @param {Content_News_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_news_description = /** @type {((inputs?: Content_News_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_News_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_news_description(inputs)
	if (locale === "de") return de_content_news_description(inputs)
	if (locale === "fr") return fr_content_news_description(inputs)
	if (locale === "it") return it_content_news_description(inputs)
	if (locale === "nl") return nl_content_news_description(inputs)
	if (locale === "pl") return pl_content_news_description(inputs)
	if (locale === "pt") return pt_content_news_description(inputs)
	if (locale === "ru") return ru_content_news_description(inputs)
	if (locale === "sv") return sv_content_news_description(inputs)
	if (locale === "tr") return tr_content_news_description(inputs)
	if (locale === "zh") return zh_content_news_description(inputs)
	if (locale === "ja") return ja_content_news_description(inputs)
	return en_content_news_description(inputs)
});
