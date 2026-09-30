/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Forked_Banner_TitleInputs */

const en_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your fork is ready.`)
};

const es_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu copia está lista.`)
};

const de_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Fork ist fertig.`)
};

const fr_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre copie est prête.`)
};

const it_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo fork è pronto.`)
};

const nl_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je fork staat klaar.`)
};

const pl_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja kopia jest gotowa.`)
};

const pt_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua cópia está pronta.`)
};

const ru_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша копия готова.`)
};

const sv_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din fork är klar.`)
};

const tr_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyan hazır.`)
};

const zh_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复刻完成。`)
};

const ja_kits_forked_banner_title = /** @type {(inputs: Kits_Forked_Banner_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォークが完成しました。`)
};

/**
* | output |
* | --- |
* | "Your fork is ready." |
*
* @param {Kits_Forked_Banner_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_forked_banner_title = /** @type {((inputs?: Kits_Forked_Banner_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Forked_Banner_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_forked_banner_title(inputs)
	if (locale === "de") return de_kits_forked_banner_title(inputs)
	if (locale === "fr") return fr_kits_forked_banner_title(inputs)
	if (locale === "it") return it_kits_forked_banner_title(inputs)
	if (locale === "nl") return nl_kits_forked_banner_title(inputs)
	if (locale === "pl") return pl_kits_forked_banner_title(inputs)
	if (locale === "pt") return pt_kits_forked_banner_title(inputs)
	if (locale === "ru") return ru_kits_forked_banner_title(inputs)
	if (locale === "sv") return sv_kits_forked_banner_title(inputs)
	if (locale === "tr") return tr_kits_forked_banner_title(inputs)
	if (locale === "zh") return zh_kits_forked_banner_title(inputs)
	if (locale === "ja") return ja_kits_forked_banner_title(inputs)
	return en_kits_forked_banner_title(inputs)
});
