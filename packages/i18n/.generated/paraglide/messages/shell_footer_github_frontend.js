/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_Github_FrontendInputs */

const en_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribute to the project's frontend`)
};

const es_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribuir al frontend del proyecto`)
};

const de_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Frontend des Projekts beitragen`)
};

const fr_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribuer au frontend du projet`)
};

const it_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribuisci al frontend del progetto`)
};

const nl_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijdragen aan de frontend van het project`)
};

const pl_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wspomóż frontend projektu`)
};

const pt_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contribua para o frontend do projeto`)
};

const ru_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Внести вклад в фронтенд проекта`)
};

const sv_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidra till projektets frontend`)
};

const tr_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Projeye frontend'de katkıda bulun`)
};

const zh_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`贡献至项目的前端`)
};

const ja_shell_footer_github_frontend = /** @type {(inputs: Shell_Footer_Github_FrontendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロジェクトのフロントエンドに貢献する`)
};

/**
* | output |
* | --- |
* | "Contribute to the project's frontend" |
*
* @param {Shell_Footer_Github_FrontendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_github_frontend = /** @type {((inputs?: Shell_Footer_Github_FrontendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_Github_FrontendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_github_frontend(inputs)
	if (locale === "de") return de_shell_footer_github_frontend(inputs)
	if (locale === "fr") return fr_shell_footer_github_frontend(inputs)
	if (locale === "it") return it_shell_footer_github_frontend(inputs)
	if (locale === "nl") return nl_shell_footer_github_frontend(inputs)
	if (locale === "pl") return pl_shell_footer_github_frontend(inputs)
	if (locale === "pt") return pt_shell_footer_github_frontend(inputs)
	if (locale === "ru") return ru_shell_footer_github_frontend(inputs)
	if (locale === "sv") return sv_shell_footer_github_frontend(inputs)
	if (locale === "tr") return tr_shell_footer_github_frontend(inputs)
	if (locale === "zh") return zh_shell_footer_github_frontend(inputs)
	if (locale === "ja") return ja_shell_footer_github_frontend(inputs)
	return en_shell_footer_github_frontend(inputs)
});
