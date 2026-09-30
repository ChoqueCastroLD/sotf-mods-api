/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Compat_WhereInputs */

const en_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Where it runs`)
};

const es_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dónde funciona`)
};

const de_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wo er läuft`)
};

const fr_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Où il fonctionne`)
};

const it_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dove funziona`)
};

const nl_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waar hij werkt`)
};

const pl_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gdzie działa`)
};

const pt_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onde funciona`)
};

const ru_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Где работает`)
};

const sv_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var den fungerar`)
};

const tr_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nerede çalışır`)
};

const zh_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行环境`)
};

const ja_upload_compat_where = /** @type {(inputs: Upload_Compat_WhereInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作環境`)
};

/**
* | output |
* | --- |
* | "Where it runs" |
*
* @param {Upload_Compat_WhereInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_compat_where = /** @type {((inputs?: Upload_Compat_WhereInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Compat_WhereInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_compat_where(inputs)
	if (locale === "de") return de_upload_compat_where(inputs)
	if (locale === "fr") return fr_upload_compat_where(inputs)
	if (locale === "it") return it_upload_compat_where(inputs)
	if (locale === "nl") return nl_upload_compat_where(inputs)
	if (locale === "pl") return pl_upload_compat_where(inputs)
	if (locale === "pt") return pt_upload_compat_where(inputs)
	if (locale === "ru") return ru_upload_compat_where(inputs)
	if (locale === "sv") return sv_upload_compat_where(inputs)
	if (locale === "tr") return tr_upload_compat_where(inputs)
	if (locale === "zh") return zh_upload_compat_where(inputs)
	if (locale === "ja") return ja_upload_compat_where(inputs)
	return en_upload_compat_where(inputs)
});
