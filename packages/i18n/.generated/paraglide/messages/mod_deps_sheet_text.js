/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Deps_Sheet_TextInputs */

const en_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} doesn’t work without these mods. Download them too, or continue if you already have them.`)
};

const es_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} no funciona sin estos mods. Descárgalos también o continúa si ya los tienes.`)
};

const de_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} funktioniert nicht ohne diese Mods. Lade sie mit herunter oder mach weiter, wenn du sie schon hast.`)
};

const fr_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ne fonctionne pas sans ces mods. Téléchargez-les aussi, ou continuez si vous les avez déjà.`)
};

const it_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non funziona senza queste mod. Scaricale anche tu, oppure continua se le hai già.`)
};

const nl_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} werkt niet zonder deze mods. Download ze ook, of ga verder als je ze al hebt.`)
};

const pl_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie działa bez tych modów. Pobierz je też albo kontynuuj, jeśli już je masz.`)
};

const pt_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} não funciona sem estes mods. Baixe-os também ou continue se você já tem.`)
};

const ru_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} не работает без этих модов. Скачайте и их или продолжайте, если они у вас уже есть.`)
};

const sv_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} fungerar inte utan de här moddarna. Ladda ner dem också, eller fortsätt om du redan har dem.`)
};

const tr_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bu modlar olmadan çalışmaz. Onları da indir ya da zaten varsa devam et.`)
};

const zh_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有这些模组，${i?.name} 无法运行。一起下载，或者如果你已经有了就继续。`)
};

const ja_mod_deps_sheet_text = /** @type {(inputs: Mod_Deps_Sheet_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} はこれらの MOD がないと動きません。一緒にダウンロードするか、すでに持っていればそのまま続けてください。`)
};

/**
* | output |
* | --- |
* | "{name} doesn’t work without these mods. Download them too, or continue if you already have them." |
*
* @param {Mod_Deps_Sheet_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_deps_sheet_text = /** @type {((inputs: Mod_Deps_Sheet_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Deps_Sheet_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_deps_sheet_text(inputs)
	if (locale === "de") return de_mod_deps_sheet_text(inputs)
	if (locale === "fr") return fr_mod_deps_sheet_text(inputs)
	if (locale === "it") return it_mod_deps_sheet_text(inputs)
	if (locale === "nl") return nl_mod_deps_sheet_text(inputs)
	if (locale === "pl") return pl_mod_deps_sheet_text(inputs)
	if (locale === "pt") return pt_mod_deps_sheet_text(inputs)
	if (locale === "ru") return ru_mod_deps_sheet_text(inputs)
	if (locale === "sv") return sv_mod_deps_sheet_text(inputs)
	if (locale === "tr") return tr_mod_deps_sheet_text(inputs)
	if (locale === "zh") return zh_mod_deps_sheet_text(inputs)
	if (locale === "ja") return ja_mod_deps_sheet_text(inputs)
	return en_mod_deps_sheet_text(inputs)
});
