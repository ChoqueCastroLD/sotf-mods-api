/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Empty_HintInputs */

const en_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try fewer words, or narrow it down with mods:, builds:, @user, > for commands or by:/cat:/sort:.`)
};

const es_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prueba con menos palabras o acota con mods:, builds:, @usuario, > para comandos o by:/cat:/sort:.`)
};

const de_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuche weniger Wörter oder grenze mit mods:, builds:, @nutzer, > für Befehle oder by:/cat:/sort: ein.`)
};

const fr_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essayez moins de mots, ou affinez avec mods:, builds:, @utilisateur, > pour les commandes ou by:/cat:/sort:.`)
};

const it_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova con meno parole, oppure restringi con mods:, builds:, @utente, > per i comandi o by:/cat:/sort:.`)
};

const nl_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer minder woorden, of verfijn met mods:, builds:, @gebruiker, > voor opdrachten of by:/cat:/sort:.`)
};

const pl_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj mniej słów lub zawęź wyniki za pomocą mods:, builds:, @użytkownik, > dla poleceń albo by:/cat:/sort:.`)
};

const pt_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tente menos palavras ou refine com mods:, builds:, @usuário, > para comandos ou by:/cat:/sort:.`)
};

const ru_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Попробуйте меньше слов или уточните запрос с помощью mods:, builds:, @пользователь, > для команд или by:/cat:/sort:.`)
};

const sv_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prova färre ord, eller avgränsa med mods:, builds:, @användare, > för kommandon eller by:/cat:/sort:.`)
};

const tr_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha az kelime deneyin veya mods:, builds:, @kullanıcı, komutlar için > ya da by:/cat:/sort: ile daraltın.`)
};

const zh_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请尝试更少的词，或使用 mods:、builds:、@用户、> (命令) 或 by:/cat:/sort: 缩小范围。`)
};

const ja_shell_cmdk_empty_hint = /** @type {(inputs: Shell_Cmdk_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`語数を減らすか、mods:、builds:、@ユーザー、コマンド用の >、by:/cat:/sort: で絞り込んでください。`)
};

/**
* | output |
* | --- |
* | "Try fewer words, or narrow it down with mods:, builds:, @user, > for commands or by:/cat:/sort:." |
*
* @param {Shell_Cmdk_Empty_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_empty_hint = /** @type {((inputs?: Shell_Cmdk_Empty_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Empty_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_empty_hint(inputs)
	if (locale === "de") return de_shell_cmdk_empty_hint(inputs)
	if (locale === "fr") return fr_shell_cmdk_empty_hint(inputs)
	if (locale === "it") return it_shell_cmdk_empty_hint(inputs)
	if (locale === "nl") return nl_shell_cmdk_empty_hint(inputs)
	if (locale === "pl") return pl_shell_cmdk_empty_hint(inputs)
	if (locale === "pt") return pt_shell_cmdk_empty_hint(inputs)
	if (locale === "ru") return ru_shell_cmdk_empty_hint(inputs)
	if (locale === "sv") return sv_shell_cmdk_empty_hint(inputs)
	if (locale === "tr") return tr_shell_cmdk_empty_hint(inputs)
	if (locale === "zh") return zh_shell_cmdk_empty_hint(inputs)
	if (locale === "ja") return ja_shell_cmdk_empty_hint(inputs)
	return en_shell_cmdk_empty_hint(inputs)
});
