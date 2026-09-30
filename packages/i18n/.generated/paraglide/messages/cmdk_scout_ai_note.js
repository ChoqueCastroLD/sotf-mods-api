/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_Ai_NoteInputs */

const en_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Written by AI from the catalog. Check each mod page before installing.`)
};

const es_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrito por una IA a partir del catálogo. Revisa la página de cada mod antes de instalar.`)
};

const de_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von einer KI anhand des Katalogs verfasst. Prüfe die Seite jeder Mod vor der Installation.`)
};

const fr_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rédigé par une IA à partir du catalogue. Consulte la page de chaque mod avant de l’installer.`)
};

const it_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scritto da un’IA a partire dal catalogo. Controlla la pagina di ogni mod prima di installarla.`)
};

const nl_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Door AI geschreven op basis van de catalogus. Bekijk de pagina van elke mod voor je installeert.`)
};

const pl_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisane przez AI na podstawie katalogu. Przed instalacją sprawdź stronę każdego moda.`)
};

const pt_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrito por IA a partir do catálogo. Vê a página de cada mod antes de instalar.`)
};

const ru_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ответ написан ИИ по данным каталога. Перед установкой проверьте страницу каждого мода.`)
};

const sv_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skrivet av AI utifrån katalogen. Kontrollera varje modds sida innan du installerar.`)
};

const tr_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katalogdan yapay zekâ tarafından yazıldı. Kurmadan önce her modun sayfasına bak.`)
};

const zh_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`由 AI 根据目录撰写。安装前请查看每个模组的页面。`)
};

const ja_cmdk_scout_ai_note = /** @type {(inputs: Cmdk_Scout_Ai_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カタログをもとにAIが作成しました。インストール前に各Modのページを確認してください。`)
};

/**
* | output |
* | --- |
* | "Written by AI from the catalog. Check each mod page before installing." |
*
* @param {Cmdk_Scout_Ai_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_ai_note = /** @type {((inputs?: Cmdk_Scout_Ai_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_Ai_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_ai_note(inputs)
	if (locale === "de") return de_cmdk_scout_ai_note(inputs)
	if (locale === "fr") return fr_cmdk_scout_ai_note(inputs)
	if (locale === "it") return it_cmdk_scout_ai_note(inputs)
	if (locale === "nl") return nl_cmdk_scout_ai_note(inputs)
	if (locale === "pl") return pl_cmdk_scout_ai_note(inputs)
	if (locale === "pt") return pt_cmdk_scout_ai_note(inputs)
	if (locale === "ru") return ru_cmdk_scout_ai_note(inputs)
	if (locale === "sv") return sv_cmdk_scout_ai_note(inputs)
	if (locale === "tr") return tr_cmdk_scout_ai_note(inputs)
	if (locale === "zh") return zh_cmdk_scout_ai_note(inputs)
	if (locale === "ja") return ja_cmdk_scout_ai_note(inputs)
	return en_cmdk_scout_ai_note(inputs)
});
