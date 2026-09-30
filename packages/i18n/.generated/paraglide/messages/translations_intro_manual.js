/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Intro_ManualInputs */

const en_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write your own translation of the short description for any language. Automatic translation is not available on this server.`)
};

const es_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe tu propia traducción de la descripción corta para cualquier idioma. La traducción automática no está disponible en este servidor.`)
};

const de_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schreibe deine eigene Übersetzung der Kurzbeschreibung für jede Sprache. Die automatische Übersetzung ist auf diesem Server nicht verfügbar.`)
};

const fr_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrivez votre propre traduction de la description courte pour n’importe quelle langue. La traduction automatique n’est pas disponible sur ce serveur.`)
};

const it_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi la tua traduzione della descrizione breve per qualsiasi lingua. La traduzione automatica non è disponibile su questo server.`)
};

const nl_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schrijf je eigen vertaling van de korte beschrijving voor elke taal. Automatisch vertalen is op deze server niet beschikbaar.`)
};

const pl_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz własne tłumaczenie krótkiego opisu na dowolny język. Automatyczne tłumaczenie nie jest dostępne na tym serwerze.`)
};

const pt_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escreva sua própria tradução da descrição curta para qualquer idioma. A tradução automática não está disponível neste servidor.`)
};

const ru_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Напишите свой перевод краткого описания на любой язык. Автоматический перевод на этом сервере недоступен.`)
};

const sv_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv din egen översättning av den korta beskrivningen för valfritt språk. Automatisk översättning är inte tillgänglig på den här servern.`)
};

const tr_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa açıklamanın istediğin dildeki çevirisini kendin yaz. Otomatik çeviri bu sunucuda kullanılamıyor.`)
};

const zh_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为任意语言撰写简短描述的译文。此服务器不提供自动翻译。`)
};

const ja_translations_intro_manual = /** @type {(inputs: Translations_Intro_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短い説明の翻訳を、好きな言語で自分で書けます。このサーバーでは自動翻訳を利用できません。`)
};

/**
* | output |
* | --- |
* | "Write your own translation of the short description for any language. Automatic translation is not available on this server." |
*
* @param {Translations_Intro_ManualInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_intro_manual = /** @type {((inputs?: Translations_Intro_ManualInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Intro_ManualInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_intro_manual(inputs)
	if (locale === "de") return de_translations_intro_manual(inputs)
	if (locale === "fr") return fr_translations_intro_manual(inputs)
	if (locale === "it") return it_translations_intro_manual(inputs)
	if (locale === "nl") return nl_translations_intro_manual(inputs)
	if (locale === "pl") return pl_translations_intro_manual(inputs)
	if (locale === "pt") return pt_translations_intro_manual(inputs)
	if (locale === "ru") return ru_translations_intro_manual(inputs)
	if (locale === "sv") return sv_translations_intro_manual(inputs)
	if (locale === "tr") return tr_translations_intro_manual(inputs)
	if (locale === "zh") return zh_translations_intro_manual(inputs)
	if (locale === "ja") return ja_translations_intro_manual(inputs)
	return en_translations_intro_manual(inputs)
});
