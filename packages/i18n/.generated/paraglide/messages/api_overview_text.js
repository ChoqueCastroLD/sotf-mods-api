/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Overview_TextInputs */

const en_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything below works from a script or an AI assistant with one of your keys, without opening the website.`)
};

const es_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo esto funciona desde un script o un asistente de IA con una de tus claves, sin abrir la web.`)
};

const de_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles hier funktioniert aus einem Skript oder einem KI-Assistenten mit einem deiner Schlüssel, ohne die Website zu öffnen.`)
};

const fr_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ceci fonctionne depuis un script ou un assistant IA avec l’une de vos clés, sans ouvrir le site.`)
};

const it_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto questo funziona da uno script o da un assistente IA con una delle tue chiavi, senza aprire il sito.`)
};

const nl_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit werkt allemaal vanuit een script of AI-assistent met een van je sleutels, zonder de website te openen.`)
};

const pl_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko to działa ze skryptu lub asystenta AI z jednym z twoich kluczy, bez otwierania strony.`)
};

const pt_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo isto funciona por um script ou assistente de IA com uma das suas chaves, sem abrir o site.`)
};

const ru_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё это работает из скрипта или ИИ-ассистента с одним из ваших ключей, не открывая сайт.`)
};

const sv_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt här fungerar från ett skript eller en AI-assistent med en av dina nycklar, utan att öppna webbplatsen.`)
};

const tr_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buradaki her şey, web sitesini açmadan anahtarlarından biriyle bir betikten veya yapay zeka asistanından yapılabilir.`)
};

const zh_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以下操作都可以通过脚本或 AI 助手使用你的密钥完成，无需打开网站。`)
};

const ja_api_overview_text = /** @type {(inputs: Api_Overview_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここにあることはすべて、サイトを開かずにスクリプトや AI アシスタントからキーを使って行えます。`)
};

/**
* | output |
* | --- |
* | "Everything below works from a script or an AI assistant with one of your keys, without opening the website." |
*
* @param {Api_Overview_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_overview_text = /** @type {((inputs?: Api_Overview_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Overview_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_overview_text(inputs)
	if (locale === "de") return de_api_overview_text(inputs)
	if (locale === "fr") return fr_api_overview_text(inputs)
	if (locale === "it") return it_api_overview_text(inputs)
	if (locale === "nl") return nl_api_overview_text(inputs)
	if (locale === "pl") return pl_api_overview_text(inputs)
	if (locale === "pt") return pt_api_overview_text(inputs)
	if (locale === "ru") return ru_api_overview_text(inputs)
	if (locale === "sv") return sv_api_overview_text(inputs)
	if (locale === "tr") return tr_api_overview_text(inputs)
	if (locale === "zh") return zh_api_overview_text(inputs)
	if (locale === "ja") return ja_api_overview_text(inputs)
	return en_api_overview_text(inputs)
});
