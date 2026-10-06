/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Install_IntroInputs */

const en_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`These steps install ${i?.name} by hand, without a manager.`)
};

const es_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Estos pasos instalan ${i?.name} a mano, sin gestor.`)
};

const de_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diese Schritte installieren ${i?.name} von Hand, ohne Manager.`)
};

const fr_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ces étapes installent ${i?.name} à la main, sans gestionnaire.`)
};

const it_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Questi passaggi installano ${i?.name} a mano, senza gestore.`)
};

const nl_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Met deze stappen installeer je ${i?.name} handmatig, zonder manager.`)
};

const pl_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Te kroki instalują ${i?.name} ręcznie, bez menedżera.`)
};

const pt_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Estes passos instalam ${i?.name} manualmente, sem gerenciador.`)
};

const ru_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Эти шаги устанавливают ${i?.name} вручную, без менеджера.`)
};

const sv_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De här stegen installerar ${i?.name} manuellt, utan hanterare.`)
};

const tr_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu adımlarla ${i?.name} yönetici kullanmadan elle kurulur.`)
};

const zh_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`按以下步骤手动安装 ${i?.name}，无需管理器。`)
};

const ja_mod_install_intro = /** @type {(inputs: Mod_Install_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を手動で、マネージャーなしでインストールする手順です。`)
};

/**
* | output |
* | --- |
* | "These steps install {name} by hand, without a manager." |
*
* @param {Mod_Install_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_intro = /** @type {((inputs: Mod_Install_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_intro(inputs)
	if (locale === "de") return de_mod_install_intro(inputs)
	if (locale === "fr") return fr_mod_install_intro(inputs)
	if (locale === "it") return it_mod_install_intro(inputs)
	if (locale === "nl") return nl_mod_install_intro(inputs)
	if (locale === "pl") return pl_mod_install_intro(inputs)
	if (locale === "pt") return pt_mod_install_intro(inputs)
	if (locale === "ru") return ru_mod_install_intro(inputs)
	if (locale === "sv") return sv_mod_install_intro(inputs)
	if (locale === "tr") return tr_mod_install_intro(inputs)
	if (locale === "zh") return zh_mod_install_intro(inputs)
	if (locale === "ja") return ja_mod_install_intro(inputs)
	return en_mod_install_intro(inputs)
});
