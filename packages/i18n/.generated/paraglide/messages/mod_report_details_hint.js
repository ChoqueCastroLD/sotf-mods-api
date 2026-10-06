/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Details_HintInputs */

const en_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links, versions or anything that helps the moderators. Up to 2,000 characters.`)
};

const es_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaces, versiones o lo que ayude a los moderadores. Hasta 2000 caracteres.`)
};

const de_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links, Versionen oder alles, was den Moderatoren hilft. Bis zu 2000 Zeichen.`)
};

const fr_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liens, versions ou tout ce qui aide les modérateurs. 2 000 caractères maximum.`)
};

const it_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link, versioni o qualsiasi cosa aiuti i moderatori. Fino a 2000 caratteri.`)
};

const nl_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links, versies of wat de moderators verder helpt. Tot 2000 tekens.`)
};

const pl_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki, wersje lub cokolwiek, co pomoże moderatorom. Do 2000 znaków.`)
};

const pt_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links, versões ou o que ajudar os moderadores. Até 2.000 caracteres.`)
};

const ru_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки, версии или всё, что поможет модераторам. До 2000 символов.`)
};

const sv_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länkar, versioner eller annat som hjälper moderatorerna. Upp till 2 000 tecken.`)
};

const tr_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantılar, sürümler veya moderatörlerin işine yarayacak her şey. En fazla 2.000 karakter.`)
};

const zh_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接、版本或任何能帮助版主的信息，最多 2000 个字符。`)
};

const ja_mod_report_details_hint = /** @type {(inputs: Mod_Report_Details_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクやバージョンなど、モデレーターの役に立つ情報。2000 文字まで。`)
};

/**
* | output |
* | --- |
* | "Links, versions or anything that helps the moderators. Up to 2,000 characters." |
*
* @param {Mod_Report_Details_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_details_hint = /** @type {((inputs?: Mod_Report_Details_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Details_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_details_hint(inputs)
	if (locale === "de") return de_mod_report_details_hint(inputs)
	if (locale === "fr") return fr_mod_report_details_hint(inputs)
	if (locale === "it") return it_mod_report_details_hint(inputs)
	if (locale === "nl") return nl_mod_report_details_hint(inputs)
	if (locale === "pl") return pl_mod_report_details_hint(inputs)
	if (locale === "pt") return pt_mod_report_details_hint(inputs)
	if (locale === "ru") return ru_mod_report_details_hint(inputs)
	if (locale === "sv") return sv_mod_report_details_hint(inputs)
	if (locale === "tr") return tr_mod_report_details_hint(inputs)
	if (locale === "zh") return zh_mod_report_details_hint(inputs)
	if (locale === "ja") return ja_mod_report_details_hint(inputs)
	return en_mod_report_details_hint(inputs)
});
