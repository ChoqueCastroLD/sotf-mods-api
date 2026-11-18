/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_DescriptionInputs */

const en_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload mods, publish versions, edit listings and read your stats from scripts or AI assistants, without opening the website. Create a key, then follow the guide.`)
};

const es_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sube mods, publica versiones, edita fichas y consulta tus estadísticas desde scripts o asistentes de IA, sin abrir la web. Crea una clave y sigue la guía.`)
};

const de_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lade Mods hoch, veröffentliche Versionen, bearbeite Einträge und sieh deine Statistiken über Skripte oder KI-Assistenten, ohne die Website zu öffnen. Erstelle einen Schlüssel und folge der Anleitung.`)
};

const fr_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiez des mods et des versions, modifiez vos fiches et consultez vos statistiques depuis des scripts ou des assistants IA, sans ouvrir le site. Créez une clé, puis suivez le guide.`)
};

const it_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica mod, pubblica versioni, modifica le schede e leggi le tue statistiche da script o assistenti IA, senza aprire il sito. Crea una chiave e segui la guida.`)
};

const nl_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload mods, publiceer versies, bewerk pagina’s en bekijk je statistieken vanuit scripts of AI-assistenten, zonder de website te openen. Maak een sleutel en volg de gids.`)
};

const pl_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wysyłaj mody, publikuj wersje, edytuj opisy i sprawdzaj statystyki ze skryptów lub asystentów AI, bez otwierania strony. Utwórz klucz i postępuj według przewodnika.`)
};

const pt_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envie mods, publique versões, edite páginas e veja suas estatísticas por scripts ou assistentes de IA, sem abrir o site. Crie uma chave e siga o guia.`)
};

const ru_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загружайте моды, публикуйте версии, редактируйте страницы и смотрите статистику из скриптов или ИИ-ассистентов, не открывая сайт. Создайте ключ и следуйте руководству.`)
};

const sv_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp moddar, publicera versioner, redigera sidor och se din statistik från skript eller AI-assistenter, utan att öppna webbplatsen. Skapa en nyckel och följ guiden.`)
};

const tr_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web sitesini açmadan, betiklerden veya yapay zeka asistanlarından mod yükle, sürüm yayınla, sayfaları düzenle ve istatistiklerini gör. Bir anahtar oluştur ve rehberi izle.`)
};

const zh_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无需打开网站，即可通过脚本或 AI 助手上传模组、发布版本、编辑页面和查看统计。创建密钥，然后按照指南操作。`)
};

const ja_api_description = /** @type {(inputs: Api_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトを開かずに、スクリプトや AI アシスタントから Mod のアップロード、バージョン公開、ページ編集、統計の確認ができます。キーを作成してガイドに沿って進めてください。`)
};

/**
* | output |
* | --- |
* | "Upload mods, publish versions, edit listings and read your stats from scripts or AI assistants, without opening the website. Create a key, then follow the gu..." |
*
* @param {Api_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_description = /** @type {((inputs?: Api_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_description(inputs)
	if (locale === "de") return de_api_description(inputs)
	if (locale === "fr") return fr_api_description(inputs)
	if (locale === "it") return it_api_description(inputs)
	if (locale === "nl") return nl_api_description(inputs)
	if (locale === "pl") return pl_api_description(inputs)
	if (locale === "pt") return pt_api_description(inputs)
	if (locale === "ru") return ru_api_description(inputs)
	if (locale === "sv") return sv_api_description(inputs)
	if (locale === "tr") return tr_api_description(inputs)
	if (locale === "zh") return zh_api_description(inputs)
	if (locale === "ja") return ja_api_description(inputs)
	return en_api_description(inputs)
});
