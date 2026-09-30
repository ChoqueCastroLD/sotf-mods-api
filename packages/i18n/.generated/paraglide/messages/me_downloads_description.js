/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_DescriptionInputs */

const en_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every mod you downloaded while signed in, with the updates you are missing.`)
};

const es_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los mods que has descargado con la sesión iniciada, con las actualizaciones que te faltan.`)
};

const de_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Mod, den du angemeldet heruntergeladen hast, mit den Updates, die dir fehlen.`)
};

const fr_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque mod téléchargé en étant connecté, avec les mises à jour qui vous manquent.`)
};

const it_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni mod scaricata con l’accesso effettuato, con gli aggiornamenti che ti mancano.`)
};

const nl_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke mod die je ingelogd hebt gedownload, met de updates die je mist.`)
};

const pl_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy mod pobrany po zalogowaniu, z aktualizacjami, których ci brakuje.`)
};

const pt_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os mods que você baixou com a sessão iniciada, com as atualizações que faltam.`)
};

const ru_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все моды, скачанные вами после входа, и обновления, которых у вас нет.`)
};

const sv_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje modd du laddat ned när du var inloggad, med uppdateringarna du saknar.`)
};

const tr_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturum açıkken indirdiğin her mod ve kaçırdığın güncellemeler.`)
};

const zh_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你登录后下载过的所有模组，以及你还没获取的更新。`)
};

const ja_me_downloads_description = /** @type {(inputs: Me_Downloads_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログイン中にダウンロードしたすべてのMODと、未入手のアップデート。`)
};

/**
* | output |
* | --- |
* | "Every mod you downloaded while signed in, with the updates you are missing." |
*
* @param {Me_Downloads_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_description = /** @type {((inputs?: Me_Downloads_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_description(inputs)
	if (locale === "de") return de_me_downloads_description(inputs)
	if (locale === "fr") return fr_me_downloads_description(inputs)
	if (locale === "it") return it_me_downloads_description(inputs)
	if (locale === "nl") return nl_me_downloads_description(inputs)
	if (locale === "pl") return pl_me_downloads_description(inputs)
	if (locale === "pt") return pt_me_downloads_description(inputs)
	if (locale === "ru") return ru_me_downloads_description(inputs)
	if (locale === "sv") return sv_me_downloads_description(inputs)
	if (locale === "tr") return tr_me_downloads_description(inputs)
	if (locale === "zh") return zh_me_downloads_description(inputs)
	if (locale === "ja") return ja_me_downloads_description(inputs)
	return en_me_downloads_description(inputs)
});
