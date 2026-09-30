/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Nsfw_TextInputs */

const en_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This mod is marked 18+. Confirm that you are an adult to see it.`)
};

const es_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod está marcado como +18. Confirma que eres mayor de edad para verlo.`)
};

const de_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Mod ist ab 18 markiert. Bestätige, dass du volljährig bist, um ihn zu sehen.`)
};

const fr_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mod est marqué 18+. Confirmez que vous êtes majeur pour le voir.`)
};

const it_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa mod è segnata come 18+. Conferma di essere maggiorenne per vederla.`)
};

const nl_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod is gemarkeerd als 18+. Bevestig dat je volwassen bent om hem te zien.`)
};

const pl_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod jest oznaczony jako 18+. Potwierdź, że jesteś pełnoletni, aby go zobaczyć.`)
};

const pt_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod está marcado como 18+. Confirme que você é maior de idade para vê-lo.`)
};

const ru_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот мод помечен 18+. Подтвердите, что вам есть 18, чтобы его увидеть.`)
};

const sv_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här moden är märkt 18+. Bekräfta att du är vuxen för att se den.`)
};

const tr_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod 18+ olarak işaretli. Görmek için yetişkin olduğunu onayla.`)
};

const zh_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组被标记为 18+。请确认你已成年后再查看。`)
};

const ja_mod_nsfw_text = /** @type {(inputs: Mod_Nsfw_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD は 18 歳以上向けです。表示するには成人であることを確認してください。`)
};

/**
* | output |
* | --- |
* | "This mod is marked 18+. Confirm that you are an adult to see it." |
*
* @param {Mod_Nsfw_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_nsfw_text = /** @type {((inputs?: Mod_Nsfw_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Nsfw_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_nsfw_text(inputs)
	if (locale === "de") return de_mod_nsfw_text(inputs)
	if (locale === "fr") return fr_mod_nsfw_text(inputs)
	if (locale === "it") return it_mod_nsfw_text(inputs)
	if (locale === "nl") return nl_mod_nsfw_text(inputs)
	if (locale === "pl") return pl_mod_nsfw_text(inputs)
	if (locale === "pt") return pt_mod_nsfw_text(inputs)
	if (locale === "ru") return ru_mod_nsfw_text(inputs)
	if (locale === "sv") return sv_mod_nsfw_text(inputs)
	if (locale === "tr") return tr_mod_nsfw_text(inputs)
	if (locale === "zh") return zh_mod_nsfw_text(inputs)
	if (locale === "ja") return ja_mod_nsfw_text(inputs)
	return en_mod_nsfw_text(inputs)
});
