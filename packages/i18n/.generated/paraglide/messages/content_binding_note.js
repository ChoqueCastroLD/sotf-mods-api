/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Binding_NoteInputs */

const en_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This translation is provided for convenience. If it differs from the English version, the English version applies.`)
};

const es_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta traducción es orientativa. Si difiere de la versión en inglés, se aplica la versión en inglés.`)
};

const de_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Übersetzung dient nur der Orientierung. Weicht sie von der englischen Fassung ab, gilt die englische Fassung.`)
};

const fr_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette traduction est fournie à titre indicatif. En cas de différence avec la version anglaise, la version anglaise s’applique.`)
};

const it_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa traduzione è fornita per comodità. Se differisce dalla versione inglese, prevale la versione inglese.`)
};

const nl_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze vertaling is alleen ter informatie. Als ze afwijkt van de Engelse versie, geldt de Engelse versie.`)
};

const pl_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To tłumaczenie ma charakter pomocniczy. Jeśli różni się od wersji angielskiej, obowiązuje wersja angielska.`)
};

const pt_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta tradução é apenas uma referência. Se divergir da versão em inglês, vale a versão em inglês.`)
};

const ru_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот перевод приведён для удобства. Если он расходится с английской версией, действует английская версия.`)
};

const sv_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättningen är bara vägledande. Om den skiljer sig från den engelska versionen gäller den engelska.`)
};

const tr_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu çeviri kolaylık için sunulmuştur. İngilizce sürümden farklıysa İngilizce sürüm geçerlidir.`)
};

const zh_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本译文仅供参考。如与英文版不一致，以英文版为准。`)
};

const ja_content_binding_note = /** @type {(inputs: Content_Binding_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この翻訳は参考用です。英語版と異なる場合は英語版が優先されます。`)
};

/**
* | output |
* | --- |
* | "This translation is provided for convenience. If it differs from the English version, the English version applies." |
*
* @param {Content_Binding_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_binding_note = /** @type {((inputs?: Content_Binding_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Binding_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_binding_note(inputs)
	if (locale === "de") return de_content_binding_note(inputs)
	if (locale === "fr") return fr_content_binding_note(inputs)
	if (locale === "it") return it_content_binding_note(inputs)
	if (locale === "nl") return nl_content_binding_note(inputs)
	if (locale === "pl") return pl_content_binding_note(inputs)
	if (locale === "pt") return pt_content_binding_note(inputs)
	if (locale === "ru") return ru_content_binding_note(inputs)
	if (locale === "sv") return sv_content_binding_note(inputs)
	if (locale === "tr") return tr_content_binding_note(inputs)
	if (locale === "zh") return zh_content_binding_note(inputs)
	if (locale === "ja") return ja_content_binding_note(inputs)
	return en_content_binding_note(inputs)
});
