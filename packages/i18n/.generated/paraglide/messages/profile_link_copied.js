/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Link_CopiedInputs */

const en_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile link copied`)
};

const es_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace del perfil copiado`)
};

const de_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profillink kopiert`)
};

const fr_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien du profil copié`)
};

const it_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link del profilo copiato`)
};

const nl_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profiellink gekopieerd`)
};

const pl_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano link do profilu`)
};

const pt_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link do perfil copiado`)
};

const ru_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка на профиль скопирована`)
};

const sv_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profillänken har kopierats`)
};

const tr_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil bağlantısı kopyalandı`)
};

const zh_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制个人主页链接`)
};

const ja_profile_link_copied = /** @type {(inputs: Profile_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィールのリンクをコピーしました`)
};

/**
* | output |
* | --- |
* | "Profile link copied" |
*
* @param {Profile_Link_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_link_copied = /** @type {((inputs?: Profile_Link_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Link_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_link_copied(inputs)
	if (locale === "de") return de_profile_link_copied(inputs)
	if (locale === "fr") return fr_profile_link_copied(inputs)
	if (locale === "it") return it_profile_link_copied(inputs)
	if (locale === "nl") return nl_profile_link_copied(inputs)
	if (locale === "pl") return pl_profile_link_copied(inputs)
	if (locale === "pt") return pt_profile_link_copied(inputs)
	if (locale === "ru") return ru_profile_link_copied(inputs)
	if (locale === "sv") return sv_profile_link_copied(inputs)
	if (locale === "tr") return tr_profile_link_copied(inputs)
	if (locale === "zh") return zh_profile_link_copied(inputs)
	if (locale === "ja") return ja_profile_link_copied(inputs)
	return en_profile_link_copied(inputs)
});
