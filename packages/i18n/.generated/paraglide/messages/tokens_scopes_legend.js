/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Scopes_LegendInputs */

const en_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permissions`)
};

const es_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permisos`)
};

const de_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berechtigungen`)
};

const fr_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autorisations`)
};

const it_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permessi`)
};

const nl_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechten`)
};

const pl_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uprawnienia`)
};

const pt_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Permissões`)
};

const ru_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Права`)
};

const sv_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behörigheter`)
};

const tr_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İzinler`)
};

const zh_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`权限`)
};

const ja_tokens_scopes_legend = /** @type {(inputs: Tokens_Scopes_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`権限`)
};

/**
* | output |
* | --- |
* | "Permissions" |
*
* @param {Tokens_Scopes_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_scopes_legend = /** @type {((inputs?: Tokens_Scopes_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scopes_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_scopes_legend(inputs)
	if (locale === "de") return de_tokens_scopes_legend(inputs)
	if (locale === "fr") return fr_tokens_scopes_legend(inputs)
	if (locale === "it") return it_tokens_scopes_legend(inputs)
	if (locale === "nl") return nl_tokens_scopes_legend(inputs)
	if (locale === "pl") return pl_tokens_scopes_legend(inputs)
	if (locale === "pt") return pt_tokens_scopes_legend(inputs)
	if (locale === "ru") return ru_tokens_scopes_legend(inputs)
	if (locale === "sv") return sv_tokens_scopes_legend(inputs)
	if (locale === "tr") return tr_tokens_scopes_legend(inputs)
	if (locale === "zh") return zh_tokens_scopes_legend(inputs)
	if (locale === "ja") return ja_tokens_scopes_legend(inputs)
	return en_tokens_scopes_legend(inputs)
});
