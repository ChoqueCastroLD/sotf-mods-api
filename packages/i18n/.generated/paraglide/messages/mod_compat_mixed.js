/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown>, works: NonNullable<unknown>, broken: NonNullable<unknown> }} Mod_Compat_MixedInputs */

const en_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("en", i?.works, {});
	const broken__number = registry.number("en", i?.broken, {});return /** @type {LocalizedString} */ (`Mixed reports on ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const es_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("es", i?.works, {});
	const broken__number = registry.number("es", i?.broken, {});return /** @type {LocalizedString} */ (`Reportes mixtos en ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const de_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("de", i?.works, {});
	const broken__number = registry.number("de", i?.broken, {});return /** @type {LocalizedString} */ (`Gemischte Berichte zu ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const fr_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("fr", i?.works, {});
	const broken__number = registry.number("fr", i?.broken, {});return /** @type {LocalizedString} */ (`Rapports mitigés sur ${i?.build} : ${works__number} ✔ · ${broken__number} ✖`)
};

const it_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("it", i?.works, {});
	const broken__number = registry.number("it", i?.broken, {});return /** @type {LocalizedString} */ (`Rapporti contrastanti su ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const nl_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("nl", i?.works, {});
	const broken__number = registry.number("nl", i?.broken, {});return /** @type {LocalizedString} */ (`Wisselende rapporten op ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const pl_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pl", i?.works, {});
	const broken__number = registry.number("pl", i?.broken, {});return /** @type {LocalizedString} */ (`Mieszane raporty na ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const pt_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("pt", i?.works, {});
	const broken__number = registry.number("pt", i?.broken, {});return /** @type {LocalizedString} */ (`Relatos mistos em ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const ru_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ru", i?.works, {});
	const broken__number = registry.number("ru", i?.broken, {});return /** @type {LocalizedString} */ (`Разные отчёты на ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const sv_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("sv", i?.works, {});
	const broken__number = registry.number("sv", i?.broken, {});return /** @type {LocalizedString} */ (`Blandade rapporter på ${i?.build}: ${works__number} ✔ · ${broken__number} ✖`)
};

const tr_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("tr", i?.works, {});
	const broken__number = registry.number("tr", i?.broken, {});return /** @type {LocalizedString} */ (`${i?.build} için karışık raporlar: ${works__number} ✔ · ${broken__number} ✖`)
};

const zh_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("zh", i?.works, {});
	const broken__number = registry.number("zh", i?.broken, {});return /** @type {LocalizedString} */ (`${i?.build} 上的报告不一：${works__number} ✔ · ${broken__number} ✖`)
};

const ja_mod_compat_mixed = /** @type {(inputs: Mod_Compat_MixedInputs) => LocalizedString} */ (i) => {
	const works__number = registry.number("ja", i?.works, {});
	const broken__number = registry.number("ja", i?.broken, {});return /** @type {LocalizedString} */ (`${i?.build} での報告は賛否あり：${works__number} ✔ · ${broken__number} ✖`)
};

/**
* | output |
* | --- |
* | "Mixed reports on {build}: {works__number} ✔ · {broken__number} ✖" |
*
* @param {Mod_Compat_MixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_compat_mixed = /** @type {((inputs: Mod_Compat_MixedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_MixedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_compat_mixed(inputs)
	if (locale === "de") return de_mod_compat_mixed(inputs)
	if (locale === "fr") return fr_mod_compat_mixed(inputs)
	if (locale === "it") return it_mod_compat_mixed(inputs)
	if (locale === "nl") return nl_mod_compat_mixed(inputs)
	if (locale === "pl") return pl_mod_compat_mixed(inputs)
	if (locale === "pt") return pt_mod_compat_mixed(inputs)
	if (locale === "ru") return ru_mod_compat_mixed(inputs)
	if (locale === "sv") return sv_mod_compat_mixed(inputs)
	if (locale === "tr") return tr_mod_compat_mixed(inputs)
	if (locale === "zh") return zh_mod_compat_mixed(inputs)
	if (locale === "ja") return ja_mod_compat_mixed(inputs)
	return en_mod_compat_mixed(inputs)
});
