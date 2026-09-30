/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Connections_TitleInputs */

const en_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connected accounts`)
};

const es_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuentas conectadas`)
};

const de_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbundene Konten`)
};

const fr_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comptes connectés`)
};

const it_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Account collegati`)
};

const nl_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gekoppelde accounts`)
};

const pl_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połączone konta`)
};

const pt_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contas conectadas`)
};

const ru_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подключённые аккаунты`)
};

const sv_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anslutna konton`)
};

const tr_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlı hesaplar`)
};

const zh_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关联的账号`)
};

const ja_oauth_connections_title = /** @type {(inputs: Oauth_Connections_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`連携済みアカウント`)
};

/**
* | output |
* | --- |
* | "Connected accounts" |
*
* @param {Oauth_Connections_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_connections_title = /** @type {((inputs?: Oauth_Connections_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Connections_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_connections_title(inputs)
	if (locale === "de") return de_oauth_connections_title(inputs)
	if (locale === "fr") return fr_oauth_connections_title(inputs)
	if (locale === "it") return it_oauth_connections_title(inputs)
	if (locale === "nl") return nl_oauth_connections_title(inputs)
	if (locale === "pl") return pl_oauth_connections_title(inputs)
	if (locale === "pt") return pt_oauth_connections_title(inputs)
	if (locale === "ru") return ru_oauth_connections_title(inputs)
	if (locale === "sv") return sv_oauth_connections_title(inputs)
	if (locale === "tr") return tr_oauth_connections_title(inputs)
	if (locale === "zh") return zh_oauth_connections_title(inputs)
	if (locale === "ja") return ja_oauth_connections_title(inputs)
	return en_oauth_connections_title(inputs)
});
