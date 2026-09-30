/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Submit_NoneInputs */

const en_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have no published mods or builds that can enter this jam yet.`)
};

const es_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no tienes mods ni builds publicados que puedan participar en este jam.`)
};

const de_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast noch keine veröffentlichten Mods oder Builds, die an dieser Jam teilnehmen können.`)
};

const fr_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous n'avez pas encore de mod ou build publié pouvant participer à ce jam.`)
};

const it_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai ancora mod o build pubblicate che possano partecipare a questo jam.`)
};

const nl_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt nog geen gepubliceerde mods of builds die aan deze jam kunnen meedoen.`)
};

const pl_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie masz jeszcze opublikowanych modów ani buildów, które mogłyby wziąć udział w tym jamie.`)
};

const pt_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não tem mods ou builds publicados que possam participar deste jam.`)
};

const ru_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас пока нет опубликованных модов или сборок, подходящих для этого джема.`)
};

const sv_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inga publicerade moddar eller builds som kan delta i den här jammen ännu.`)
};

const tr_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu jam'e katılabilecek yayımlanmış modunuz veya build'iniz henüz yok.`)
};

const zh_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有可参加本场 Jam 的已发布模组或构建。`)
};

const ja_jams_submit_none = /** @type {(inputs: Jams_Submit_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このジャムに応募できる公開済みの Mod やビルドがまだありません。`)
};

/**
* | output |
* | --- |
* | "You have no published mods or builds that can enter this jam yet." |
*
* @param {Jams_Submit_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_none = /** @type {((inputs?: Jams_Submit_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_none(inputs)
	if (locale === "de") return de_jams_submit_none(inputs)
	if (locale === "fr") return fr_jams_submit_none(inputs)
	if (locale === "it") return it_jams_submit_none(inputs)
	if (locale === "nl") return nl_jams_submit_none(inputs)
	if (locale === "pl") return pl_jams_submit_none(inputs)
	if (locale === "pt") return pt_jams_submit_none(inputs)
	if (locale === "ru") return ru_jams_submit_none(inputs)
	if (locale === "sv") return sv_jams_submit_none(inputs)
	if (locale === "tr") return tr_jams_submit_none(inputs)
	if (locale === "zh") return zh_jams_submit_none(inputs)
	if (locale === "ja") return ja_jams_submit_none(inputs)
	return en_jams_submit_none(inputs)
});
