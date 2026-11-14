/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Incompatibility_DependencyInputs */

const en_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A dependency of this mod cannot also be incompatible with it.`)
};

const es_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una dependencia de este mod no puede ser también incompatible con él.`)
};

const de_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Abhängigkeit dieses Mods kann nicht zugleich inkompatibel sein.`)
};

const fr_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une dépendance de ce mod ne peut pas aussi être incompatible avec lui.`)
};

const it_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una dipendenza di questo mod non può essere anche incompatibile.`)
};

const nl_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een afhankelijkheid van deze mod kan niet ook incompatibel zijn.`)
};

const pl_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależność tego moda nie może być jednocześnie z nim niezgodna.`)
};

const pt_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma dependência deste mod não pode ser também incompatível com ele.`)
};

const ru_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимость этого мода не может быть одновременно несовместимой.`)
};

const sv_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett beroende till den här modden kan inte samtidigt vara inkompatibelt.`)
};

const tr_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modun bir bağımlılığı aynı zamanda uyumsuz olamaz.`)
};

const zh_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组的依赖项不能同时标记为不兼容。`)
};

const ja_upload_preflight_incompatibility_dependency = /** @type {(inputs: Upload_Preflight_Incompatibility_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このModの依存先を互換性なしにはできません。`)
};

/**
* | output |
* | --- |
* | "A dependency of this mod cannot also be incompatible with it." |
*
* @param {Upload_Preflight_Incompatibility_DependencyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_incompatibility_dependency = /** @type {((inputs?: Upload_Preflight_Incompatibility_DependencyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Incompatibility_DependencyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "de") return de_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "fr") return fr_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "it") return it_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "nl") return nl_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "pl") return pl_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "pt") return pt_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "ru") return ru_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "sv") return sv_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "tr") return tr_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "zh") return zh_upload_preflight_incompatibility_dependency(inputs)
	if (locale === "ja") return ja_upload_preflight_incompatibility_dependency(inputs)
	return en_upload_preflight_incompatibility_dependency(inputs)
});
