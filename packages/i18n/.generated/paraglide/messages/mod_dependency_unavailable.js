/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Dependency_UnavailableInputs */

const en_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not available on the site`)
};

const es_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No disponible en el sitio`)
};

const de_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht auf der Seite verfügbar`)
};

const fr_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indisponible sur le site`)
};

const it_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non disponibile sul sito`)
};

const nl_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet beschikbaar op de site`)
};

const pl_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niedostępne na stronie`)
};

const pt_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não disponível no site`)
};

const ru_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет на сайте`)
};

const sv_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finns inte på sajten`)
};

const tr_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitede mevcut değil`)
};

const zh_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本站未收录`)
};

const ja_mod_dependency_unavailable = /** @type {(inputs: Mod_Dependency_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このサイトにはありません`)
};

/**
* | output |
* | --- |
* | "Not available on the site" |
*
* @param {Mod_Dependency_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_dependency_unavailable = /** @type {((inputs?: Mod_Dependency_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Dependency_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_dependency_unavailable(inputs)
	if (locale === "de") return de_mod_dependency_unavailable(inputs)
	if (locale === "fr") return fr_mod_dependency_unavailable(inputs)
	if (locale === "it") return it_mod_dependency_unavailable(inputs)
	if (locale === "nl") return nl_mod_dependency_unavailable(inputs)
	if (locale === "pl") return pl_mod_dependency_unavailable(inputs)
	if (locale === "pt") return pt_mod_dependency_unavailable(inputs)
	if (locale === "ru") return ru_mod_dependency_unavailable(inputs)
	if (locale === "sv") return sv_mod_dependency_unavailable(inputs)
	if (locale === "tr") return tr_mod_dependency_unavailable(inputs)
	if (locale === "zh") return zh_mod_dependency_unavailable(inputs)
	if (locale === "ja") return ja_mod_dependency_unavailable(inputs)
	return en_mod_dependency_unavailable(inputs)
});
