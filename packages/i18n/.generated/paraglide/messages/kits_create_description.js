/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Create_DescriptionInputs */

const en_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name it now; you’ll add mods in the editor.`)
};

const es_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponle nombre ahora; los mods se añaden en el editor.`)
};

const de_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib ihm jetzt einen Namen, die Mods fügst du im Editor hinzu.`)
};

const fr_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Donnez-lui un nom maintenant, vous ajouterez les mods dans l’éditeur.`)
};

const it_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagli un nome ora; le mod le aggiungerai nell’editor.`)
};

const nl_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geef hem nu een naam; mods voeg je toe in de editor.`)
};

const pl_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwij go teraz, mody dodasz w edytorze.`)
};

const pt_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dê um nome agora; os mods você adiciona no editor.`)
};

const ru_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Задайте название сейчас, а моды добавите в редакторе.`)
};

const sv_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namnge det nu, moddarna lägger du till i redigeraren.`)
};

const tr_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdi bir ad ver; modları düzenleyicide ekleyeceksin.`)
};

const zh_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先起个名字，模组稍后在编辑器里添加。`)
};

const ja_kits_create_description = /** @type {(inputs: Kits_Create_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前を付けましょう。MOD はエディターで追加します。`)
};

/**
* | output |
* | --- |
* | "Name it now; you’ll add mods in the editor." |
*
* @param {Kits_Create_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_create_description = /** @type {((inputs?: Kits_Create_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Create_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_create_description(inputs)
	if (locale === "de") return de_kits_create_description(inputs)
	if (locale === "fr") return fr_kits_create_description(inputs)
	if (locale === "it") return it_kits_create_description(inputs)
	if (locale === "nl") return nl_kits_create_description(inputs)
	if (locale === "pl") return pl_kits_create_description(inputs)
	if (locale === "pt") return pt_kits_create_description(inputs)
	if (locale === "ru") return ru_kits_create_description(inputs)
	if (locale === "sv") return sv_kits_create_description(inputs)
	if (locale === "tr") return tr_kits_create_description(inputs)
	if (locale === "zh") return zh_kits_create_description(inputs)
	if (locale === "ja") return ja_kits_create_description(inputs)
	return en_kits_create_description(inputs)
});
