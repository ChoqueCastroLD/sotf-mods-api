/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Principle_RetroactiveInputs */

const en_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything is retroactive: accounts from 2023 onwards keep what they already earned.`)
};

const es_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo es retroactivo: las cuentas desde 2023 conservan lo que ya se ganaron.`)
};

const de_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles gilt rückwirkend: Konten seit 2023 behalten, was sie sich schon verdient haben.`)
};

const fr_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout est rétroactif : les comptes créés depuis 2023 conservent ce qu’ils ont déjà gagné.`)
};

const it_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto è retroattivo: gli account dal 2023 in poi conservano ciò che hanno già guadagnato.`)
};

const nl_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles geldt met terugwerkende kracht: accounts vanaf 2023 houden wat ze al verdiend hebben.`)
};

const pl_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko działa wstecz: konta od 2023 roku zachowują to, co już zdobyły.`)
};

const pt_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo é retroativo: contas de 2023 em diante mantêm o que já conquistaram.`)
};

const ru_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё засчитывается задним числом: аккаунты с 2023 года сохраняют то, что уже заработали.`)
};

const sv_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt gäller retroaktivt: konton från 2023 och framåt behåller det de redan tjänat in.`)
};

const tr_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her şey geriye dönük: 2023’ten itibaren açılan hesaplar kazandıklarını korur.`)
};

const zh_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一切均可追溯：自 2023 年起的账号都会保留已获得的成就。`)
};

const ja_profile_achievements_principle_retroactive = /** @type {(inputs: Profile_Achievements_Principle_RetroactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて遡って適用されます：2023 年以降のアカウントは、これまでの成果をそのまま保持します。`)
};

/**
* | output |
* | --- |
* | "Everything is retroactive: accounts from 2023 onwards keep what they already earned." |
*
* @param {Profile_Achievements_Principle_RetroactiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_principle_retroactive = /** @type {((inputs?: Profile_Achievements_Principle_RetroactiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Principle_RetroactiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_principle_retroactive(inputs)
	if (locale === "de") return de_profile_achievements_principle_retroactive(inputs)
	if (locale === "fr") return fr_profile_achievements_principle_retroactive(inputs)
	if (locale === "it") return it_profile_achievements_principle_retroactive(inputs)
	if (locale === "nl") return nl_profile_achievements_principle_retroactive(inputs)
	if (locale === "pl") return pl_profile_achievements_principle_retroactive(inputs)
	if (locale === "pt") return pt_profile_achievements_principle_retroactive(inputs)
	if (locale === "ru") return ru_profile_achievements_principle_retroactive(inputs)
	if (locale === "sv") return sv_profile_achievements_principle_retroactive(inputs)
	if (locale === "tr") return tr_profile_achievements_principle_retroactive(inputs)
	if (locale === "zh") return zh_profile_achievements_principle_retroactive(inputs)
	if (locale === "ja") return ja_profile_achievements_principle_retroactive(inputs)
	return en_profile_achievements_principle_retroactive(inputs)
});
