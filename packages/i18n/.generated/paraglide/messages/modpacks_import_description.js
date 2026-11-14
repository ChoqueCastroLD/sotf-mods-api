/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Import_DescriptionInputs */

const en_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a .sotfprofile file (up to 256 KB). Its mods are added to the list below.`)
};

const es_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un archivo .sotfprofile (hasta 256 KB). Sus mods se añaden a la lista de abajo.`)
};

const de_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle eine .sotfprofile-Datei (bis 256 KB). Ihre Mods werden zur Liste unten hinzugefügt.`)
};

const fr_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un fichier .sotfprofile (256 Ko max.). Ses mods sont ajoutés à la liste ci-dessous.`)
};

const it_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli un file .sotfprofile (fino a 256 KB). Le sue mod vengono aggiunte all’elenco qui sotto.`)
};

const nl_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een .sotfprofile-bestand (max. 256 KB). De mods erin worden aan de lijst hieronder toegevoegd.`)
};

const pl_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz plik .sotfprofile (do 256 KB). Jego mody zostaną dodane do listy poniżej.`)
};

const pt_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um arquivo .sotfprofile (até 256 KB). Os mods dele são adicionados à lista abaixo.`)
};

const ru_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите файл .sotfprofile (до 256 КБ). Его моды будут добавлены в список ниже.`)
};

const sv_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en .sotfprofile-fil (upp till 256 KB). Dess moddar läggs till i listan nedan.`)
};

const tr_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir .sotfprofile dosyası seç (en fazla 256 KB). İçindeki modlar aşağıdaki listeye eklenir.`)
};

const zh_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择一个 .sotfprofile 文件（最大 256 KB）。其中的模组会添加到下方列表。`)
};

const ja_modpacks_import_description = /** @type {(inputs: Modpacks_Import_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`.sotfprofile ファイル（256 KB まで）を選んでください。中の Mod が下のリストに追加されます。`)
};

/**
* | output |
* | --- |
* | "Choose a .sotfprofile file (up to 256 KB). Its mods are added to the list below." |
*
* @param {Modpacks_Import_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_import_description = /** @type {((inputs?: Modpacks_Import_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Import_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_import_description(inputs)
	if (locale === "de") return de_modpacks_import_description(inputs)
	if (locale === "fr") return fr_modpacks_import_description(inputs)
	if (locale === "it") return it_modpacks_import_description(inputs)
	if (locale === "nl") return nl_modpacks_import_description(inputs)
	if (locale === "pl") return pl_modpacks_import_description(inputs)
	if (locale === "pt") return pt_modpacks_import_description(inputs)
	if (locale === "ru") return ru_modpacks_import_description(inputs)
	if (locale === "sv") return sv_modpacks_import_description(inputs)
	if (locale === "tr") return tr_modpacks_import_description(inputs)
	if (locale === "zh") return zh_modpacks_import_description(inputs)
	if (locale === "ja") return ja_modpacks_import_description(inputs)
	return en_modpacks_import_description(inputs)
});
