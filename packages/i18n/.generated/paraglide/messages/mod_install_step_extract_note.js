/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Extract_NoteInputs */

const en_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep the folder structure of the ZIP. Don’t put the ZIP itself in the folder.`)
};

const es_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respeta la estructura de carpetas del ZIP. No metas el ZIP tal cual en la carpeta.`)
};

const de_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behalte die Ordnerstruktur des ZIPs bei. Lege nicht das ZIP selbst in den Ordner.`)
};

const fr_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gardez la structure des dossiers du ZIP. Ne mettez pas le ZIP lui-même dans le dossier.`)
};

const it_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantieni la struttura delle cartelle dello ZIP. Non mettere lo ZIP stesso nella cartella.`)
};

const nl_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behoud de mappenstructuur van de ZIP. Zet de ZIP zelf niet in de map.`)
};

const pl_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zachowaj strukturę folderów z ZIP-a. Nie wrzucaj samego ZIP-a do folderu.`)
};

const pt_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantenha a estrutura de pastas do ZIP. Não coloque o próprio ZIP na pasta.`)
};

const ru_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохраните структуру папок из ZIP. Не кладите в папку сам ZIP.`)
};

const sv_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behåll mappstrukturen i ZIP-filen. Lägg inte själva ZIP-filen i mappen.`)
};

const tr_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP içindeki klasör yapısını koru. ZIP dosyasının kendisini klasöre koyma.`)
};

const zh_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保持 ZIP 内的文件夹结构，不要把 ZIP 文件本身放进文件夹。`)
};

const ja_mod_install_step_extract_note = /** @type {(inputs: Mod_Install_Step_Extract_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ZIP 内のフォルダー構成はそのままに。ZIP ファイル自体をフォルダーに入れないでください。`)
};

/**
* | output |
* | --- |
* | "Keep the folder structure of the ZIP. Don’t put the ZIP itself in the folder." |
*
* @param {Mod_Install_Step_Extract_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_extract_note = /** @type {((inputs?: Mod_Install_Step_Extract_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Extract_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_extract_note(inputs)
	if (locale === "de") return de_mod_install_step_extract_note(inputs)
	if (locale === "fr") return fr_mod_install_step_extract_note(inputs)
	if (locale === "it") return it_mod_install_step_extract_note(inputs)
	if (locale === "nl") return nl_mod_install_step_extract_note(inputs)
	if (locale === "pl") return pl_mod_install_step_extract_note(inputs)
	if (locale === "pt") return pt_mod_install_step_extract_note(inputs)
	if (locale === "ru") return ru_mod_install_step_extract_note(inputs)
	if (locale === "sv") return sv_mod_install_step_extract_note(inputs)
	if (locale === "tr") return tr_mod_install_step_extract_note(inputs)
	if (locale === "zh") return zh_mod_install_step_extract_note(inputs)
	if (locale === "ja") return ja_mod_install_step_extract_note(inputs)
	return en_mod_install_step_extract_note(inputs)
});
