/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_Backpack_RemovedInputs */

const en_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You no longer follow ${i?.mod}`)
};

const es_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Has dejado de seguir ${i?.mod}`)
};

const de_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du folgst ${i?.mod} nicht mehr`)
};

const fr_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous ne suivez plus ${i?.mod}`)
};

const it_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Non segui più ${i?.mod}`)
};

const nl_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je volgt ${i?.mod} niet meer`)
};

const pl_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przestałeś obserwować ${i?.mod}`)
};

const pt_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você deixou de seguir ${i?.mod}`)
};

const ru_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вы отписались от ${i?.mod}`)
};

const sv_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du följer inte längre ${i?.mod}`)
};

const tr_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} artık takip edilmiyor`)
};

const zh_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已取消关注 ${i?.mod}`)
};

const ja_me_backpack_removed = /** @type {(inputs: Me_Backpack_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} のフォローを解除しました`)
};

/**
* | output |
* | --- |
* | "You no longer follow {mod}" |
*
* @param {Me_Backpack_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_removed = /** @type {((inputs: Me_Backpack_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_removed(inputs)
	if (locale === "de") return de_me_backpack_removed(inputs)
	if (locale === "fr") return fr_me_backpack_removed(inputs)
	if (locale === "it") return it_me_backpack_removed(inputs)
	if (locale === "nl") return nl_me_backpack_removed(inputs)
	if (locale === "pl") return pl_me_backpack_removed(inputs)
	if (locale === "pt") return pt_me_backpack_removed(inputs)
	if (locale === "ru") return ru_me_backpack_removed(inputs)
	if (locale === "sv") return sv_me_backpack_removed(inputs)
	if (locale === "tr") return tr_me_backpack_removed(inputs)
	if (locale === "zh") return zh_me_backpack_removed(inputs)
	if (locale === "ja") return ja_me_backpack_removed(inputs)
	return en_me_backpack_removed(inputs)
});
