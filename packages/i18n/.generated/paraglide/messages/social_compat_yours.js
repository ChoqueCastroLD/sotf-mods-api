/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ result: NonNullable<unknown>, build: NonNullable<unknown>, mode: NonNullable<unknown>, version: NonNullable<unknown> }} Social_Compat_YoursInputs */

const en_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You reported «${i?.result}» on ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const es_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reportaste «${i?.result}» en ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const de_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du hast «${i?.result}» auf ${i?.build} gemeldet (${i?.mode}, v${i?.version}).`)
};

const fr_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous avez signalé « ${i?.result} » sur ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const it_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hai segnalato «${i?.result}» su ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const nl_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je meldde «${i?.result}» op ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const pl_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zgłoszono «${i?.result}» na ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const pt_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você relatou «${i?.result}» no ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const ru_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы отметили «${i?.result}» на ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const sv_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du rapporterade ”${i?.result}” på ${i?.build} (${i?.mode}, v${i?.version}).`)
};

const tr_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} üzerinde “${i?.result}” bildirdin (${i?.mode}, v${i?.version}).`)
};

const zh_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你在 ${i?.build} 上报告了“${i?.result}”（${i?.mode}，v${i?.version}）。`)
};

const ja_social_compat_yours = /** @type {(inputs: Social_Compat_YoursInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} で「${i?.result}」と報告しました（${i?.mode}、v${i?.version}）。`)
};

/**
* | output |
* | --- |
* | "You reported «{result}» on {build} ({mode}, v{version})." |
*
* @param {Social_Compat_YoursInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_yours = /** @type {((inputs: Social_Compat_YoursInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_YoursInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_yours(inputs)
	if (locale === "de") return de_social_compat_yours(inputs)
	if (locale === "fr") return fr_social_compat_yours(inputs)
	if (locale === "it") return it_social_compat_yours(inputs)
	if (locale === "nl") return nl_social_compat_yours(inputs)
	if (locale === "pl") return pl_social_compat_yours(inputs)
	if (locale === "pt") return pt_social_compat_yours(inputs)
	if (locale === "ru") return ru_social_compat_yours(inputs)
	if (locale === "sv") return sv_social_compat_yours(inputs)
	if (locale === "tr") return tr_social_compat_yours(inputs)
	if (locale === "zh") return zh_social_compat_yours(inputs)
	if (locale === "ja") return ja_social_compat_yours(inputs)
	return en_social_compat_yours(inputs)
});
