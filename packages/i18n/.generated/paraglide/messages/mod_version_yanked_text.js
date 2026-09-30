/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Version_Yanked_TextInputs */

const en_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The creator withdrew this version. Use a newer one.`)
};

const es_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El creador retiró esta versión. Usa una más reciente.`)
};

const de_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Ersteller hat diese Version zurückgezogen. Nutze eine neuere.`)
};

const fr_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le créateur a retiré cette version. Utilisez-en une plus récente.`)
};

const it_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il creatore ha ritirato questa versione. Usane una più recente.`)
};

const nl_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De maker heeft deze versie ingetrokken. Gebruik een nieuwere.`)
};

const pl_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca wycofał tę wersję. Użyj nowszej.`)
};

const pt_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O criador retirou esta versão. Use uma mais recente.`)
};

const ru_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор отозвал эту версию. Используйте более новую.`)
};

const sv_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparen har dragit in den här versionen. Använd en nyare.`)
};

const tr_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı bu sürümü geri çekti. Daha yeni bir sürüm kullan.`)
};

const zh_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者撤回了此版本，请使用更新的版本。`)
};

const ja_mod_version_yanked_text = /** @type {(inputs: Mod_Version_Yanked_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者がこのバージョンを取り下げました。新しいバージョンを使ってください。`)
};

/**
* | output |
* | --- |
* | "The creator withdrew this version. Use a newer one." |
*
* @param {Mod_Version_Yanked_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_yanked_text = /** @type {((inputs?: Mod_Version_Yanked_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Yanked_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_yanked_text(inputs)
	if (locale === "de") return de_mod_version_yanked_text(inputs)
	if (locale === "fr") return fr_mod_version_yanked_text(inputs)
	if (locale === "it") return it_mod_version_yanked_text(inputs)
	if (locale === "nl") return nl_mod_version_yanked_text(inputs)
	if (locale === "pl") return pl_mod_version_yanked_text(inputs)
	if (locale === "pt") return pt_mod_version_yanked_text(inputs)
	if (locale === "ru") return ru_mod_version_yanked_text(inputs)
	if (locale === "sv") return sv_mod_version_yanked_text(inputs)
	if (locale === "tr") return tr_mod_version_yanked_text(inputs)
	if (locale === "zh") return zh_mod_version_yanked_text(inputs)
	if (locale === "ja") return ja_mod_version_yanked_text(inputs)
	return en_mod_version_yanked_text(inputs)
});
