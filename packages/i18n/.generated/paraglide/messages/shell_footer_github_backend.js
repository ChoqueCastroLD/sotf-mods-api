/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_Github_BackendInputs */

const en_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribute to the project's backend`)
};

const es_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribuir al backend del proyecto`)
};

const de_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Backend des Projekts beitragen`)
};

const fr_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribuer au backend du projet`)
};

const it_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribuisci al backend del progetto`)
};

const nl_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijdragen aan de backend van het project`)
};

const pl_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wspomóż backend projektu`)
};

const pt_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribua para o backend do projeto`)
};

const ru_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Внести вклад в бэкенд проекта`)
};

const sv_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidra till projektets backend`)
};

const tr_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Projeye backend'de katkıda bulun`)
};

const zh_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`贡献至项目的后端`)
};

const ja_shell_footer_github_backend = /** @type {(inputs: Shell_Footer_Github_BackendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロジェクトのバックエンドに貢献する`)
};

/**
* | output |
* | --- |
* | "Contribute to the project's backend" |
*
* @param {Shell_Footer_Github_BackendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_github_backend = /** @type {((inputs?: Shell_Footer_Github_BackendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_Github_BackendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_github_backend(inputs)
	if (locale === "de") return de_shell_footer_github_backend(inputs)
	if (locale === "fr") return fr_shell_footer_github_backend(inputs)
	if (locale === "it") return it_shell_footer_github_backend(inputs)
	if (locale === "nl") return nl_shell_footer_github_backend(inputs)
	if (locale === "pl") return pl_shell_footer_github_backend(inputs)
	if (locale === "pt") return pt_shell_footer_github_backend(inputs)
	if (locale === "ru") return ru_shell_footer_github_backend(inputs)
	if (locale === "sv") return sv_shell_footer_github_backend(inputs)
	if (locale === "tr") return tr_shell_footer_github_backend(inputs)
	if (locale === "zh") return zh_shell_footer_github_backend(inputs)
	if (locale === "ja") return ja_shell_footer_github_backend(inputs)
	return en_shell_footer_github_backend(inputs)
});
